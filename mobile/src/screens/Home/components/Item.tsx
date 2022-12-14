import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '~/constans/colors';
import fonts from '~/constans/fonts';
import {NftDatasource} from '~/constans/mock-data';

export interface IProps {}

const Item = () => {
  return (
    <View style={styles.container}>
      <Image
        source={NftDatasource[0].img}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.nftName}>Gold astronaut</Text>
        <Text style={styles.owner}>@alfinas</Text>
      </View>
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.CARD,
    width: '48%',
    borderRadius: 16,
  },
  img: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {paddingHorizontal: 12, paddingVertical: 12},
  nftName: {
    color: colors.WHITE,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    fontFamily: fonts.INTER,
    marginBottom: 5,
  },
  owner: {
    color: '#EFEFEF',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: fonts.INTER,
  },
});
