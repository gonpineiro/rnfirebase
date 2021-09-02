import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainScreen } from '../screens';

import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'HomeTab':
      iconName = 'home';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }

  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    const iconSize = focused ? size * 1.2 : size;

    return <MaterialIcons name={iconName || 'help-outline'} size={iconSize} color={color} />;
  },
  tabBarAllowFontScalling: false,
  tabBarActiveTintColor: colors.mainOrange,
  tabBarInactiveTintColor: colors.veryLightBlue,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  headerShown: false,
});

const TabNavigator = () => (
  <Tab.Navigator screenOptions={navigatorScreenOptions}>
    <Tab.Screen name="HomeTab" component={MainScreen} options={{ title: 'Home' }} />
  </Tab.Navigator>
);

export default TabNavigator;
