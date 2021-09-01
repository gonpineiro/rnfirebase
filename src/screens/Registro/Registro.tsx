import React, { useState } from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Input } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';

const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setEPass] = useState('');

  const handlerEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlerPassChange = (value: string) => {
    setEPass(value);
  };

  return (
    <View style={styles.mainContainer}>
      <Separator width={50} />
      <Input
        label="Correo Electronico"
        placeholder="Ingrese su correo"
        value={email}
        onChance={handlerEmailChange}
      />
      <Input
        label="Contraseña"
        placeholder="Ingrese su contraseña"
        value={pass}
        onChance={handlerPassChange}
      />
      <DefaultButton
        text="Registrarse"
        textSize={16}
        onPress={() => goToScreen('Registro')}
        variant="primary"
      />
    </View>
  );
};

export default RegistroScreen;
