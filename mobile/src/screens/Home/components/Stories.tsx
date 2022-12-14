import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from '~/constans/colors';
import {storiesDatasource} from '~/constans/mock-data';
import YourFriend from './YourFriend';

export interface IProps {}

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <ScrollView
        contentContainerStyle={styles.storiesContent}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {storiesDatasource.map((item, index) => (
          <YourFriend key={String(index)} story={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 22,
    color: colors.WHITE,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storiesContent: {
    flexDirection: 'row',
  },
});
