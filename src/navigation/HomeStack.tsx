import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default HomeStack;
