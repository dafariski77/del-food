import { colors, fontSize } from '@/theme';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { AppText } from './AppText';

interface AppButtonProps extends Omit<PressableProps, 'style'> {
  text?: string;
}

export function AppButton({ text, ...props }: AppButtonProps) {
  //   {
  //   textSize = fontSize.sm,
  //   variant = 'solid',
  // }
  // const getVariantButton = () => {
  //   let variantStyle: ViewStyle = {};
  //   let textStyle = {
  //     color: colors.white,
  //     weight: 'bold',
  //   };

  //   switch (variant) {
  //     case 'primary':
  //       variantStyle = {
  //         backgroundColor: colors.primary,
  //       };

  //       textStyle = {
  //         color: colors.white,
  //         weight: 'bold',
  //       };
  //     case 'outline':
  //       variantStyle = {
  //         backgroundColor: colors.transparent,
  //         borderWidth: 1,
  //         borderColor: colors.white,
  //       };

  //       textStyle = {
  //         color: colors.white,
  //         weight: 'regular',
  //       };
  //     case 'danger':
  //   }
  // };

  return (
    <Pressable
      style={{
        backgroundColor: colors.primary,
        paddingVertical: 22,
        borderRadius: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}
    >
      <AppText size={fontSize.sm} weight="bold" color={colors.white}>
        {text}
      </AppText>
    </Pressable>
  );
}

const style = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
});
