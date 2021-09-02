import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, View } from 'react-native';

import { DefaultButton, Separator, Input } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

/* import { goToScreen } from '../../navigation/controls'; */

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handlerEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlerPassChange = (value: string) => {
    setPass(value);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <>
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

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
