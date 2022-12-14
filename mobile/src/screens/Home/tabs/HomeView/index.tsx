import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '~/constans/colors';
import HeaderHome from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Stories from '../../components/Stories';
import Nfts from '../../components/Nfts';

export default function HomeView() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />
      <Stories />
      <Nfts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.MAIN,
    flex: 1,
  },
});
