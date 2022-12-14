import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import {RootStackParamList} from './src/types/navigation';
import {colors} from './src/constans/colors';
import {StatusBar} from 'react-native';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.MAIN} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
