import React from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../utils/theme';
import Typography from '../Typography';
import styles from './styles';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChance: (text: string) => void;
}

const Input = ({ label, placeholder, onChance, value }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={18} color={colors.mainOrange} variant="regular">
        {label}
      </Typography>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={onChance}
          value={value}
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default Input;
