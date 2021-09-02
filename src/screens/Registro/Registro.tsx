import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, View } from 'react-native';

import { DefaultButton, Separator, Input, AlertModal, Header } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

/* import { goToScreen } from '../../navigation/controls'; */

const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setEPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalRegisterVisible, setModalRegisterVisible] = useState(false);

  const showModalRegister = () => {
    setModalRegisterVisible(true);
  };

  const hideModal = () => {
    setModalRegisterVisible(false);
  };

  const handlerEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlerPassChange = (value: string) => {
    setEPass(value);
  };

  const createCount = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        showModalRegister();
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showModalRegister();
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showModalRegister();
        }

        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <View style={styles.wholeScreenCenter}>
        <ActivityIndicator size="large" color={colors.mainOrange} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={true} title="Registro" />
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
        <DefaultButton text="Registrarse" textSize={16} onPress={createCount} variant="primary" />
        <AlertModal
          message={'Se registro correctamente'}
          primaryButtonText={'Ok!'}
          onPressPrimaryButton={hideModal}
          visible={isModalRegisterVisible}
        />
      </View>
    </>
  );
};

export default RegistroScreen;
