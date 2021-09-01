import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

interface Props {
  margin?: number;
  color?: string;
  borderBottomWidth?: number;
  width?: number;
}

const getStyle = ({ borderBottomWidth, color, margin, width = 50 }: Props) => {
  return {
    borderBottomWidth,
    borderBottomColor: color,
    marginBottom: margin,
    marginTop: margin,
    width: DEVICE_WIDTH - width,
  };
};

const Separator = ({ margin, color, borderBottomWidth, width }: Props) => {
  const style = getStyle({ margin, color, borderBottomWidth, width });
  return <View style={style} />;
};

Separator.defaultProps = {
  margin: 20,
  borderBottomWidth: 1,
  color: colors.white,
  width: DEVICE_WIDTH - 50,
};
export default Separator;
