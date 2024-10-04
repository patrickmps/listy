import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  width: '100%';
  padding: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const TextTitle = styled(TextInput).attrs({
  multiline: true,
  textAlignVertical: 'top',
})`
  padding: 4px;
  color: ${({ theme }) => theme.onPrimaryContainer};
  height: 56px;
  text-align-vertical: top;
  margintop: 10px;
  flex-wrap: wrap;
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.onPrimaryContainer};
`;

export const TextArea = styled(TextInput).attrs({
  multiline: true,
  textAlignVertical: 'top',
})`
  flex: 1;
  padding: 8px;
  height: 150px;
  text-align-vertical: top;
  margintop: 10px;
  flex-wrap: wrap;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  color: ${({ theme }) => theme.onBackground};
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palettes.primary[80]};
  color: ${({ theme }) => theme.onPrimary};
  padding: 10px;
  border-radius: 10px;
  width: '100%';
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const TextBtn = styled.Text`
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.onPrimary};
`;
