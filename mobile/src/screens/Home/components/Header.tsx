import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {BellIcon, ProfileIcon} from '~/assets/imgs';
import fonts from '~/constans/fonts';
import usePhantomWalletConnect from '~/utils/PhantomWalletConnect';

const HeaderHome = () => {
  const {connect, getWalletInfo} = usePhantomWalletConnect();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFT Mate</Text>
      {/* <Pressable onPress={getWalletInfo}>
        <ProfileIcon />
      </Pressable> */}
      <Pressable onPress={connect}>
        <BellIcon />
      </Pressable>
    </View>
  );
};

export default HeaderHome;
const styles = StyleSheet.create({
  container: {
    height: 58,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontFamily: fonts.INTER,
    fontWeight: 'bold',
  },
});
