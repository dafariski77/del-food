import { FontLoaderProvider } from '@/features/core/providers';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <FontLoaderProvider>
        <KeyboardProvider statusBarTranslucent>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <StatusBar style="auto" />
        </KeyboardProvider>
      </FontLoaderProvider>
    </GestureHandlerRootView>
  );
}
