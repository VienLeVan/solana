import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {ArrowDownIcon} from '~/assets/imgs';
import {colors} from '~/constans/colors';
import {NftDatasource} from '~/constans/mock-data';
import Nft from './Nft';

export interface IProps {}

const Nfts = () => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.category}>All Items</Text>
        <ArrowDownIcon />
      </View>
      <FlatList
        data={NftDatasource}
        renderItem={({item, index}) => <Nft item={item} key={String(index)} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
      />
    </View>
  );
};

export default Nfts;
const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 24,
    marginRight: 20,
  },
  container: {
    paddingHorizontal: 16,
  },
});
