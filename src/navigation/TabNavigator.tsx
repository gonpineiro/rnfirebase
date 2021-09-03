import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainScreen, FavoriteScreen, ProfileScreen } from '../screens';

import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'Main':
      iconName = 'home';
      break;
    case 'Favorite':
      iconName = 'favorite';
      break;
    case 'Profile':
      iconName = 'account-circle';
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
    <Tab.Screen name="Main" component={MainScreen} options={{ title: 'Main' }} />
    <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Favoritos' }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
  </Tab.Navigator>
);

export default TabNavigator;
