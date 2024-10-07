import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  right: -30px;
`;

export const ContentContainer = styled.View`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.palettes.primary[80]};
  color: ${({ theme }) => theme.onPrimary};
  padding: 10px;
  border-radius: 10px;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const DotsBtn = styled.Pressable`
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 50px;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palettes.primary[80]};
`;
