import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PixelRatio } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: max-content;
  height: 24px;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 25px;
  gap: 5px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: ${PixelRatio.getPixelSizeForLayoutSize(4.6)}px;
  color: ${({ theme }) => theme.inversePrimary};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.inversePrimary,
}))``;
