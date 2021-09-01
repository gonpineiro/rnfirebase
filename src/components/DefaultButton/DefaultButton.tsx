import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';
import Typography from '../Typography';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  text: string;
  onPress: () => void;
  textSize: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, styles[variant], additionalStyle]}
    >
      <Typography
        color={buttonTextColors[variant] || colors.white}
        size={textSize}
        variant={'medium'}
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  text: 'Press me',
  textSize: 18,
  variant: 'primary',
};

export default DefaultButton;
