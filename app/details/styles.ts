import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  width: '100%';
  padding: 32px;
`;

export const ContainerTaskDetail = styled.View`
  width: 100%;
`;

export const TaskDetail = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  color: ${({ theme }) => theme.onBackground};
`;
