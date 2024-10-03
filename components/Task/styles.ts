import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center; 
  margin-bottom: 24px;
`;

export const WrapperTask = styled.View`
  flex: 1; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  margin-left: 16px;
`;

export const ContainerTask = styled.View`

`;

export const ContainerInfos = styled.View`
  flex-direction: row;
  margin-right: 16px;
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
  margin-right: 16px;
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
