import { AppText } from '@/features/core/components';
import { colors } from '@/theme/colors';
import { fontSize } from '@/theme/fonts';
import { View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText color={colors.green} size={fontSize._2xl} weight="bold">
        All your favorites
      </AppText>
    </View>
  );
}
