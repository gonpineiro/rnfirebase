import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InicioSesionScreen, WelcomeScreen, RegistroScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Registro" component={RegistroScreen} />
    <Stack.Screen name="InicioSesion" component={InicioSesionScreen} />
  </Stack.Navigator>
);

export default AuthStack;
