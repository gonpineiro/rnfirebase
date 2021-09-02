import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View } from 'react-native';

import { DefaultButton, Separator, Input } from '../../components';
import styles from './styles';

/* import { goToScreen } from '../../navigation/controls'; */

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [pass, setEPass] = useState('');

  const handlerEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlerPassChange = (value: string) => {
    setEPass(value);
  };

  const createCount = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('Correcto!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Separator size={50} />
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
      <DefaultButton text="Ingresar" textSize={16} onPress={createCount} variant="primary" />
    </View>
  );
};

export default InicioSesion;
