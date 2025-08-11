import {
  Sen_400Regular,
  Sen_500Medium,
  Sen_600SemiBold,
  Sen_700Bold,
  Sen_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/sen';
import React, { createContext, useContext, useMemo } from 'react';

const FontLoaderContext = createContext(false);

export function FontLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFontLoaded] = useFonts({
    Sen_400Regular,
    Sen_500Medium,
    Sen_600SemiBold,
    Sen_700Bold,
    Sen_800ExtraBold,
  });

  const value = useMemo(() => isFontLoaded, [isFontLoaded]);

  return (
    <FontLoaderContext.Provider value={value}>
      {children}
    </FontLoaderContext.Provider>
  );
}

export const useFontLoader = () => useContext(FontLoaderContext);
