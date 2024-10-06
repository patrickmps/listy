import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, CustomInput } from './styles';
import { useTheme } from 'styled-components/native';

type InputProps = {
  onSearch: (text: string) => void;
};

export const Input = ({ onSearch }: InputProps) => {
  const theme = useTheme();

  return (
    <Box>
      <CustomInput placeholder="Pesquisar" onChangeText={onSearch} />
      <MaterialCommunityIcons
        name="magnify"
        size={24}
        style={{ marginRight: 8 }}
        color={theme.inversePrimary}
      />
    </Box>
  );
};
