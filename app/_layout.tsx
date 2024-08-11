import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

import light from '@/theme/light';
import dark from '@/theme/dark';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'PlayfairDisplay-Regular': require('@/assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Italic': require('@/assets/fonts/PlayfairDisplay-Italic.ttf'),
    'PlayfairDisplay-Bold': require('@/assets/fonts/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-BoldItalic': require('@/assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
    'PlayfairDisplay-SemiBold': require('@/assets/fonts/PlayfairDisplay-SemiBold.ttf'),
    'PlayfairDisplay-SemiBoldItalic': require('@/assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf'),
    'PlayfairDisplay-Medium': require('@/assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-MediumItalic': require('@/assets/fonts/PlayfairDisplay-MediumItalic.ttf'),
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('@/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('@/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Italic': require('@/assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-BoldItalic': require('@/assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-SemiBoldItalic': require('@/assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-MediumItalic': require('@/assets/fonts/Montserrat-MediumItalic.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? dark : light}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
