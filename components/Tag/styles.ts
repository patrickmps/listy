import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 91px;
  height: 24px;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 25px;
  gap: 5px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.inversePrimary};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.inversePrimary,
}))``;
