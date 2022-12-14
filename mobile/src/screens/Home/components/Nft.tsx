import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {EthIcon, HeartIcon, MessageIcon, SendIcon} from '~/assets/imgs';
import {colors} from '~/constans/colors';
import fonts from '~/constans/fonts';
import {INft} from '~/types';

export interface IProps {
  item: INft;
}

const Nft = ({item}: IProps) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="cover" style={styles.img} />
      <View style={styles.content}>
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <View style={styles.infoContent}>
              <HeartIcon />
              <Text style={styles.subTitle}>{item.totalLike}K</Text>
            </View>
            <View style={styles.infoContent}>
              <MessageIcon />
              <Text style={styles.subTitle}>{item.totalMessage}</Text>
            </View>
            <View style={styles.infoContent}>
              <SendIcon />
            </View>
          </View>
          <View style={styles.infoRight}>
            <EthIcon />
            <Text style={styles.price}>{item.price} ETH</Text>
          </View>
        </View>
        <Text style={styles.nftName}>{item.name}</Text>
        <Text style={styles.nftOwner}>@{item.owner}</Text>
      </View>
    </View>
  );
};

export default Nft;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.CARD,
    marginBottom: 20,
    borderRadius: 16,
    // justifyContent: 'flex-start',
    minHeight: 327,
    paddingBottom: 12,
  },
  img: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeft: {
    flexDirection: 'row',
    marginLeft: -12,
  },
  infoRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContent: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  subTitle: {
    color: colors.WHITE,
    fontFamily: fonts.INTER,
    fontSize: 12,
    marginTop: 3,
  },
  price: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nftName: {
    color: colors.WHITE,
    fontSize: 18,
    fontFamily: fonts.INTER,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 5,
  },
  nftOwner: {
    color: colors.WHITE,
    textTransform: 'capitalize',
  },
});
