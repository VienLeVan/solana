import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {colors} from '~/constans/colors';
import Item from '~/screens/Home/components/Item';

export interface IProps {}

const OnSaleTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(10).fill(1)}
        keyExtractor={(_, index) => String(index)}
        renderItem={({}) => <Item />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default OnSaleTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.MAIN,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
