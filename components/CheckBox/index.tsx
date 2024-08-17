import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomPressable } from './styles';

export const CheckBox = ({ onChange, checked }: { onChange: () => void; checked: boolean }) => {
  return (
    <CustomPressable onPress={onChange} checked={checked}>
      {checked && <MaterialCommunityIcons name="check" size={24} color="white" />}
    </CustomPressable>
  );
};
