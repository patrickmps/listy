import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #176684;
  border-radius: 10px;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #ffffff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Montserrat-Bold';
  color: ${({ theme }) => theme.inversePrimary};
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
  width: 100%;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export const CloseIconButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`;
