import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  width: '100%';
  padding: ${() => useSafeAreaInsets().top}px;
`;
