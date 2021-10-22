import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

// @ts-ignore
const WelcomeScreen = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      return setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }
  console.log(user);

  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        {user?.email}
      </Typography>
      <Separator size={50} />
      <DefaultButton text="Iniciar " textSize={16} onPress={() => replaceRoute('InicioSesion')} />
      <DefaultButton
        text="Registrarse"
        textSize={16}
        onPress={() => goToScreen('Registro')}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
