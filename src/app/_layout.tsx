import { FontLoaderProvider } from '@/features/core/providers';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <FontLoaderProvider>
      <Stack />
    </FontLoaderProvider>
  );
}
