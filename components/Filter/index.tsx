import React, { useState } from 'react';
import {
  Container,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  OptionButton,
  OptionText,
  CloseIconButton,
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Modal } from 'react-native';

type FilterProps = {
  onFilter: (option: string) => void;
};

export const Filter = ({ onFilter }: FilterProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFilterOption = (option: string) => {
    onFilter(option);
    closeModal();
  };

  return (
    <View>
      <Container onPress={openModal}>
        <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
      </Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <ModalOverlay>
          <ModalContent>
            <CloseIconButton onPress={closeModal}>
              <MaterialCommunityIcons name="close" size={24} color="#176684" />
            </CloseIconButton>

            <ModalTitle>Selecione um filtro:</ModalTitle>
            <OptionButton onPress={() => handleFilterOption('Ordem crescente')}>
              <OptionText>Ordem crescente</OptionText>
            </OptionButton>

            <OptionButton onPress={() => handleFilterOption('Ordem decrescente')}>
              <OptionText>Ordem decrescente</OptionText>
            </OptionButton>

            <OptionButton onPress={() => handleFilterOption('Em aberto')}>
              <OptionText>Em aberto</OptionText>
            </OptionButton>

            <OptionButton onPress={() => handleFilterOption('Concluídas')}>
              <OptionText>Concluídas</OptionText>
            </OptionButton>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </View>
  );
};
