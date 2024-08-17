import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, CustomInput } from './styles';
import { useTheme } from 'styled-components/native';

export const Input = () => {
  const theme = useTheme();

  return (
    <Box>
      <CustomInput placeholder="Pesquisar" />
      <MaterialCommunityIcons
        name="magnify"
        size={24}
        style={{ marginRight: 8 }}
        color={theme.inversePrimary}
      />
    </Box>
  );
};
