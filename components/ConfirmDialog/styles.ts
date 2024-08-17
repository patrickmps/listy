import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';

export const CustomModal = styled.Modal.attrs(({ theme }) => ({
  transparent: true,
  statusBarTranslucent: true,
  animationType: 'fade',
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(BlurView).attrs(({ theme }) => ({
  intensity: 30,
  experimentalBlurMethod: 'dimezisBlurView',
  tint: 'dark',
}))`
  flex: 1;
  padding: 32px;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.surfaceBright};
  border-radius: 28px;
  elevation: 5;
  align-items: flex-start;
  min-width: 300px;
  padding: 28px;
  gap: 16px;
`;

export const ModalHeader = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

export const ModalTitle = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 28px;
  color: ${({ theme }) => theme.onSurface};
`;

export const ModalSeparator = styled.View`
  min-width: 100%;
  border-radius: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.surfaceContainerHigh};
`;

export const ModalText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.onSurface};
`;

export const ModalFooter = styled.View`
  align-self: flex-end;
  flex-direction: row;
  gap: 20px;
`;

export const ModalButton = styled.Pressable`
  height: 40px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonText = styled.Text<{ type?: 'danger' | 'warning' | 'default' }>`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  color: ${({ theme, type }) =>
    type === 'danger' ? theme.error : type === 'warning' ? theme.secondary : theme.primary};
`;
