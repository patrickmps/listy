import styled from 'styled-components/native';

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.inversePrimary};
  border-radius: 8px;
`;

export const CustomInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.outlineVariant,
}))`
  flex: 1;
  height: 40px;
  border: none;
  margin-left: 8px;
  color: ${({ theme }) => theme.onBackground};
`;
