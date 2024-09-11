import styled from 'styled-components/native';

export const ContainerTaskDetail = styled.View`
  flex: 1;
  width: 100%;
`;

export const TaskDetail = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  color: ${({ theme }) => theme.onBackground};
`;
