import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './src/navigation/controls';
import MainNavigator from './src/navigation/mainNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
