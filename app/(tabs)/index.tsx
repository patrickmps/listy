import { Title } from '@/components/Title';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export default function TabOneScreen() {
  return (
    <Screen>
      <Title>Lista</Title>
    </Screen>
  );
}

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;
