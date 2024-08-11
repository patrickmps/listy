import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

export default function TabThreeScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Lista</Text>
    </Screen>
  );
}

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
