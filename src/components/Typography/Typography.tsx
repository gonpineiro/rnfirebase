import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { IS_IOS } from '../../utils/constants';
import { colors } from '../../utils/theme';

const typographyVariant = {
  bold: IS_IOS ? 'Raleway Bold' : 'Raleway-Bold',
  italic: IS_IOS ? 'Raleway Italic' : 'Raleway-Italic',
  medium: IS_IOS ? 'Raleway Medium' : 'Raleway-Medium',
  regular: IS_IOS ? 'Raleway Regular' : 'Raleway-Regular',
};
interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};

const Typography = ({ align, color, children, size, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 14,
  variant: 'regular',
};

export default Typography;
