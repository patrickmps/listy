import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
`;

export const Column = styled.View`
  flex-direction: column;
  flex: 1;
  gap: 7px;
`;

export const TaskTitle = styled.Text<{ checked: boolean }>`
  font-family: ${({ checked }) =>
    checked ? 'PlayfairDisplay-MediumItalic' : 'PlayfairDisplay-Medium'};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  font-size: 16px;
  color: ${({ theme }) => theme.onBackground};
`;

export const Tag = styled.Text`
  align-self: flex-start;
  text-align: center;
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 1px 8px;
`;
export const Time = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.inversePrimary,
}))``;
