import React from 'react';
import { View } from 'react-native';

import { Typography } from '../../components';
import styles from './styles';

// @ts-ignore
const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Perfil
      </Typography>
    </View>
  );
};

export default ProfileScreen;
