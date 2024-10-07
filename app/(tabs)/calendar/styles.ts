import styled from 'styled-components/native';

export const DayTitle = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  color: ${({ theme }) => theme.onBackground};
  margin: 20px 0;
`;

export const EmptyListText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  color: ${({ theme }) => theme.onBackground};
  margin: 20px 0;
`;
