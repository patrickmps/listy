import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  width: '100%';
  padding: 0 32px 32px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 16px;
  margin-top: 12px;
`;

export const TextTitle = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.onBackground,
}))<{ $error?: boolean }>`
  padding: 8px;
  height: 40px;
  margin: 12px 0 4px 0;
  flex-wrap: wrap;
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.onBackground};
  border: 2px solid ${(props) => (props.$error ? props.theme.error : props.theme.background)};
  border-radius: 8px;
`;

export const TextArea = styled(TextInput).attrs(({ theme }) => ({
  multiline: true,
  textAlignVertical: 'top',
  placeholderTextColor: theme.onBackground,
}))`
  flex: 1;
  padding: 8px;
  height: 150px;
  text-align-vertical: top;
  margin: 12px 0;
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

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.error};
`;
