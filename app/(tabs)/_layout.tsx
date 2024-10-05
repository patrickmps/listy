import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

import styled, { useTheme } from 'styled-components/native';
import { Image } from 'react-native';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Link } from 'expo-router';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
            source={require('@/assets/images/logo.png')}
          />
        ),
        tabBarStyle: {
          backgroundColor: theme.surfaceContainer,
          borderTopColor: 'transparent',
          shadowColor: theme.inversePrimary,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color }) => <TabBarIcon name="format-list-bulleted" color={color} />,
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarButton(props) {
            return (
              <CustomBarBtn>
                <Btn onPress={() => null}>
                  <Link href={{ pathname: '/new-task', params: { name: 'Nova tarefa' } }}>
                    <TabBarIcon name="plus" color={theme.onPrimary} />
                  </Link>
                </Btn>
              </CustomBarBtn>
            );
          },
        }}
      />
      <Tabs.Screen
        name="calendar/index"
        options={{
          title: 'Calendário',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-month-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}

const CustomBarBtn = styled.View`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onPrimary};
  align-items: center;
  justify-content: center;
  padding: 10px;
  top: -36px;
  border-radius: 12px;
  width: 72px;
  height: 72px;
`;
const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palettes.primary[80]};
  color: ${({ theme }) => theme.onPrimary};
  padding: 10px;
  border-radius: 10px;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;
