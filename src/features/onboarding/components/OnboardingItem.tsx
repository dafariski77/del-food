import { AppText } from '@/features/core/components';
import { colors, fontSize, lineHeight } from '@/theme';
import FastImage from '@d11/react-native-fast-image';
import { StyleSheet, View } from 'react-native';

export function OnboardingItem() {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('@/assets/images/illustration.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <AppText weight="extraBold" size={fontSize._3xl} align="center">
          All your favorites
        </AppText>
        <AppText
          color={colors.subtitle}
          size={fontSize.md}
          align="center"
          lineHeight={lineHeight.md}
        >
          Get all your loved foods in one once place, you just place the orer we
          do the rest
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    rowGap: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 290,
  },
  textContainer: {
    flexDirection: 'column',
    rowGap: 18,
  },
});
