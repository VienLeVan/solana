import {RouteNames} from '~/navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '~/types/navigation';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeView from './tabs/HomeView';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '~/constans/colors';
import {
  HomeIcon,
  MessageIcon,
  PlusIcon,
  ProfileIcon,
  SearchIcon,
} from '~/assets/imgs';
import ProfileView from './tabs/ProfileView';
import TakePhotoView from './tabs/TakePhotoView';

export interface HomeProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.HomeScreen> {}

const Tab = createBottomTabNavigator();
const TAB_NAME = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
  ADD: 'ADD',
  MESSAGE: 'MESSAGE',
  SETTING: 'SETTING',
};

export default function Home() {
  const renderTabBarIcon = (name: string, focused: boolean) => {
    const colorName = focused ? colors.WHITE : colors.TAB_INACTIVE;
    switch (name) {
      case TAB_NAME.HOME: {
        return <HomeIcon color={colorName} />;
      }
      case TAB_NAME.SEARCH: {
        return <SearchIcon color={colorName} />;
      }
      case TAB_NAME.ADD: {
        return (
          <View style={styles.addContainer}>
            <PlusIcon />
          </View>
        );
      }
      case TAB_NAME.MESSAGE: {
        return <MessageIcon color={colorName} />;
      }
      case TAB_NAME.SETTING: {
        return <ProfileIcon color={colorName} />;
      }
    }
    return null;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.MAIN,
          borderTopColor: colors.MAIN,
          paddingVertical: 10,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon({focused}) {
          return renderTabBarIcon(route.name, focused);
        },
      })}>
      <Tab.Screen name={TAB_NAME.HOME} component={HomeView} />
      <Tab.Screen name={TAB_NAME.SEARCH} component={HomeView} />
      <Tab.Screen name={TAB_NAME.ADD} component={TakePhotoView} />
      <Tab.Screen name={TAB_NAME.MESSAGE} component={HomeView} />
      <Tab.Screen name={TAB_NAME.SETTING} component={ProfileView} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    backgroundColor: colors.CARD,
    padding: 15,
    borderRadius: 50,
  },
  container: {
    backgroundColor: colors.MAIN,
    flex: 1,
  },
});
