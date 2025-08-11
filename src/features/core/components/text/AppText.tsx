import { colors } from '@/theme/colors';
import { fontFamily, fontSize } from '@/theme/fonts';
import { Text, TextProps, TextStyle } from 'react-native';

interface AppTextProps extends Omit<TextProps, 'style'> {
  size?: number;
  weight?: keyof typeof fontFamily.Sen;
  color?: string;
  style?: TextStyle | TextStyle[];
}

export default function AppText({
  size = fontSize.md,
  weight = 'regular',
  color = colors.title,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontFamily: fontFamily.Sen[weight],
          color,
        },
        style,
      ]}
      {...props}
    />
  );
}
