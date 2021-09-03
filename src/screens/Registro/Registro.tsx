import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, View } from 'react-native';

import { DefaultButton, Separator, Input, AlertModal, Header } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

import { goToScreen } from '../../navigation/controls';

const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalRegisterVisible, setModalRegisterVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState({ code: '', message: '' });

  const showModalRegister = (code: string) => {
    if (code === 'auth/email-already-in-use') {
      setModalMessage({
        code,
        message: 'El correo ya se encuentra en uso',
      });
    }
    if (code === 'auth/invalid-email') {
      setModalMessage({
        code,
        message: 'El correo es invalido',
      });
    }
    if (code === 'confirm') {
      setEmail('');
      setPass('');
      setModalMessage({
        code,
        message: 'Registro exitoso',
      });
    }
    setModalRegisterVisible(true);
  };

  const hideModal = () => {
    if (modalMessage.code === 'confirm') {
      goToScreen('TabNavigator');
    }
    setModalRegisterVisible(false);
  };

  const handlerEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlerPassChange = (value: string) => {
    setPass(value);
  };

  const createCount = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        showModalRegister('confirm');
      })
      .catch((error) => {
        console.log(error);

        showModalRegister(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showRegisterButton = () => {
    if (email === '' || pass === '') {
      return (
        <DefaultButton text="Faltan datos" textSize={16} onPress={() => {}} variant="secondary" />
      );
    } else {
      return (
        <DefaultButton text="Registrarse" textSize={16} onPress={createCount} variant="primary" />
      );
    }
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
        {showRegisterButton()}
        <AlertModal
          message={modalMessage.message}
          primaryButtonText={'Ok!'}
          onPressPrimaryButton={hideModal}
          visible={isModalRegisterVisible}
        />
      </View>
    </>
  );
};

export default RegistroScreen;
