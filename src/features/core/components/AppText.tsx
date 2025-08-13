import { colors } from '@/theme';
import { fontFamily, fontSize } from '@/theme/fonts';
import { Text, TextProps, TextStyle } from 'react-native';

interface AppTextProps extends Omit<TextProps, 'style'> {
  size?: number;
  weight?: keyof typeof fontFamily.Sen;
  color?: string;
  style?: TextStyle | TextStyle[];
  align?: TextStyle['textAlign'];
  lineHeight?: TextStyle['lineHeight'];
}

export function AppText({
  size = fontSize.md,
  weight = 'regular',
  color = colors.title,
  align = 'left',
  style,
  lineHeight,
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontFamily: fontFamily.Sen[weight],
          color,
          textAlign: align,
          lineHeight,
        },
        style,
      ]}
      {...props}
    />
  );
}
