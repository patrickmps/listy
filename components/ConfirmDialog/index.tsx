import { Pressable, ModalProps, Text, View } from 'react-native';
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
            <ModalButton onPress={onRequestClose}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ModalButton>
            <ModalButton>
              <ModalButtonText type="danger" onPress={onAction}>
                Excluir
              </ModalButtonText>
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </CustomModal>
  );
};
