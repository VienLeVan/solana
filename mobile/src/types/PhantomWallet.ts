export interface IPhantomWalletInfo {
  public_key: string;
  session: string;
  sharedSecret: Uint8Array;
}

export interface IPayloadMessage {
  message: string;
  session: string;
  display?: 'utf8' | 'hex';
}
