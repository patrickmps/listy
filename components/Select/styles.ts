import { Dropdown } from 'react-native-element-dropdown';
import styled from 'styled-components/native';

export const CustomDropdown = styled(Dropdown<{ name: string; value: string }>).attrs(
  ({ theme }) => ({
    placeholderStyle: {
      color: theme.onPrimaryContainer,
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
    },
    selectedTextStyle: {
      color: theme.onPrimaryContainer,
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
    },
    iconColor: theme.onPrimaryContainer,
    containerStyle: {
      backgroundColor: theme.inversePrimary,
      borderColor: 'transparent',
      borderRadius: 8,
    },
    itemContainerStyle: {
      backgroundColor: theme.inversePrimary,
      borderColor: 'transparent',
      borderRadius: 8,
    },
    itemTextStyle: {
      color: theme.onPrimaryContainer,
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
    },
    activeColor: theme.primaryContainer,
  }),
)`
  flex: 1;
  height: 40px;
  border-radius: 8px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.primaryContainer};
  font-size: 14px;
`;
