import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components/native';

import { useColorScheme } from '@/components/useColorScheme';

import { TaskProvider } from '@/contexts/TaskContext';
import dark from '@/theme/dark';
import light from '@/theme/light';
import { StatusBar } from 'react-native';

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
    <TaskProvider>
      <ThemeProvider theme={colorScheme === 'dark' ? dark : light}>
        <StatusBar />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#0F1417' : '#F6FAFE',
            },
            headerTitleStyle: {
              fontFamily: 'PlayfairDisplay-SemiBoldItalic',
              color: '#0F3F51',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#67A1B7',
            headerShadowVisible: false,
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="details/index" options={{ title: 'Detalhes da Tarefa' }} />
          <Stack.Screen name="new-task/index" />
        </Stack>
      </ThemeProvider>
    </TaskProvider>
  );
}
