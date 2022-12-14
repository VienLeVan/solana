import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import {RootStackParamList} from '~/types/navigation';
import {RouteNames} from './routesNames';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.HomeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={RouteNames.HomeScreen}
        options={{title: 'Features List'}}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
