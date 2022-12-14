import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '~/constans/colors';
import {CreatedTab, OnSaleTab, OwnedTab} from './tabs';

const Tab = createMaterialTopTabNavigator();

const TAB_ENUM = {
  CREATED: 'CREATED',
  ON_SALE: 'ON_SALE',
  OWNED: 'OWNED',
};

const ContentTabs = () => {
  const renderLabel = (name: string, focused: boolean) => {
    let tabName = '';
    switch (name) {
      case TAB_ENUM.CREATED: {
        tabName = 'Created';
        break;
      }
      case TAB_ENUM.ON_SALE: {
        tabName = 'On Sale';
        break;
      }
      case TAB_ENUM.OWNED: {
        tabName = 'Owned';
        break;
      }
    }
    return (
      <Text style={focused ? styles.tabLabelFocused : styles.tabLabelNormal}>
        {tabName}
      </Text>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: colors.MAIN,
          height: 64,
          borderTopColor: colors.CARD,
          borderTopWidth: 1,
          borderBottomColor: colors.CARD,
          borderBottomWidth: 1,
          marginTop: 24,
        },
        tabBarLabel({focused}) {
          return renderLabel(route.name, focused);
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#16ECEC',
          height: 5,
          left: '6%',
          bottom: -2,
          width: '22%',
          borderRadius: 2,
        },
      })}>
      <Tab.Screen name={TAB_ENUM.CREATED} component={CreatedTab} />
      <Tab.Screen name={TAB_ENUM.ON_SALE} component={OnSaleTab} />
      <Tab.Screen name={TAB_ENUM.OWNED} component={OwnedTab} />
    </Tab.Navigator>
  );
};

export default ContentTabs;
const styles = StyleSheet.create({
  tabLabelFocused: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.WHITE,
    width: '110%',
  },
  tabLabelNormal: {
    fontWeight: '400',
    color: '#E4E4E4',
    fontSize: 16,
  },
});
