import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

// @ts-ignore
const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome !!!!
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
