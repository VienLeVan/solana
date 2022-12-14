/* eslint-disable @typescript-eslint/no-unused-vars */
import {Linking} from 'react-native';
import {Buffer} from 'buffer';
import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';
import {useEffect, useState} from 'react';
import {IPayloadMessage, IPhantomWalletInfo} from '~/types/PhantomWallet';

const APP_SCHEME = 'nft-solona-deep-link';
const CLUSTER_MODE = 'testnet';

const buildUrl = (path: string, params: URLSearchParams) =>
  `https://phantom.app/ul/v1/${path}?${params.toString()}`;

const decryptPayload = (
  data: string,
  nonce: string,
  sharedSecret?: Uint8Array,
) => {
  if (!sharedSecret) {
    throw new Error('missing shared secret');
  }

  const decryptedData = nacl.box.open.after(
    bs58.decode(data),
    bs58.decode(nonce),
    sharedSecret,
  );
  if (!decryptedData) {
    throw new Error('Unable to decrypt data');
  }
  return JSON.parse(Buffer.from(decryptedData).toString('utf8'));
};

const encryptPayload = (payload: any, sharedSecret?: Uint8Array) => {
  if (!sharedSecret) {
    throw new Error('missing shared secret');
  }

  const nonce = nacl.randomBytes(24);

  const encryptedPayload = nacl.box.after(
    Buffer.from(JSON.stringify(payload)),
    nonce,
    sharedSecret,
  );

  return [nonce, encryptedPayload];
};

const getRedirectLink = (method: string) => `${APP_SCHEME}:///${method}`;

const NETWORK = clusterApiUrl(CLUSTER_MODE);

const usePhantomWalletConnect = () => {
  const connection = new Connection(NETWORK, 'confirmed');
  const [dappKeyPair] = useState(nacl.box.keyPair());
  const [deepLink, setDeepLink] = useState<string>('');
  const [walletInfo, setWalletInfo] = useState<IPhantomWalletInfo>();
  const [phantomWalletPublicKey, setPhantomWalletPublicKey] =
    useState<PublicKey>();

  useEffect(() => {
    (async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    })();
    Linking.addEventListener('url', handleDeepLink);
  }, []);

  useEffect(() => {
    if (!deepLink) {
      return;
    }

    const url = new URL(deepLink);
    const params = url.searchParams;

    if (params.get('errorCode')) {
      console.log('looi');
      // addLog(JSON.stringify(Object.fromEntries([...params]), null, 2));
      return;
    }

    if (/onConnect/.test(url.pathname)) {
      console.log('in on');
      const sharedSecretDapp = nacl.box.before(
        bs58.decode(params.get('phantom_encryption_public_key')!),
        dappKeyPair.secretKey,
      );
      const connectData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        sharedSecretDapp,
      );
      console.log({connectData});
      setWalletInfo({...connectData, sharedSecret: sharedSecretDapp});
      setPhantomWalletPublicKey(new PublicKey(connectData.public_key));
    } else if (/onSignMessage/.test(url.pathname)) {
      if (!walletInfo) {
        return;
      }
      const signMessageData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        walletInfo.sharedSecret,
      );
      console.log({signMessageData});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dappKeyPair.secretKey, deepLink]);

  const getWalletInfo = async () => {
    if (!phantomWalletPublicKey) {
      return;
    }
    console.log('in');
    const SOL = await connection.getBalance(phantomWalletPublicKey);
    console.log({SOL});
  };

  const handleDeepLink = ({url}: {url: string}) => {
    setDeepLink(url);
  };

  const connect = async () => {
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      cluster: CLUSTER_MODE,
      app_url: 'https://phantom.app',
      redirect_link: getRedirectLink('onConnect'),
    });
    const url = buildUrl('connect', params);
    Linking.openURL(url);
  };

  const signMessage = async () => {
    console.log('in');
    console.log({walletInfo});
    if (!walletInfo) {
      return;
    }
    const message = 'Vien test phantom wallet';
    const payload: IPayloadMessage = {
      message: bs58.encode(Buffer.from(message)),
      session: walletInfo?.session,
    };
    const [nonce, encryptedPayload] = encryptPayload(
      payload,
      walletInfo.sharedSecret,
    );

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: getRedirectLink('onSignMessage'),
      payload: bs58.encode(encryptedPayload),
    });
    const url = buildUrl('signMessage', params);
    Linking.openURL(url);
  };

  return {connect, signMessage, getWalletInfo};
};

export default usePhantomWalletConnect;
