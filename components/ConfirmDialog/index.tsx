import { ModalProps } from 'react-native';
import {
  CustomModal,
  ModalButton,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalSeparator,
  ModalText,
  ModalTitle,
} from './styles';

type ConfirmDialogProps = ModalProps & {
  onAction?: () => void;
};

export const ConfirmDialog = ({
  visible,
  onRequestClose,
  onAction,
  ...props
}: ConfirmDialogProps) => {
  return (
    <CustomModal visible={visible} onRequestClose={onRequestClose} {...props}>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Excluir Tarefa</ModalTitle>
          </ModalHeader>
          <ModalSeparator />
          <ModalText>
            Tem certeza que deseja excluir está tarefa? Isso não poderá ser desfeito.
          </ModalText>
          <ModalFooter>
            <ModalButton
              style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
              onPress={onRequestClose}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
            <ModalButton
              style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
              onPress={onAction}>
              <ModalButtonText type="danger">Excluir</ModalButtonText>
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </CustomModal>
  );
};
