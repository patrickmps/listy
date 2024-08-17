import styled from 'styled-components/native';

type Props = {
  checked: boolean;
};

export const CustomPressable = styled.Pressable<Props>`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme, checked }) =>
    checked ? theme.onSecondaryFixedVariant : 'transparent'};
`;
