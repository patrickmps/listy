import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomPressable } from './styles';

export const CheckBox = ({ onChange, checked }: { onChange: () => void; checked: boolean }) => {
  return (
    <CustomPressable
      style={({ pressed }) => (pressed ? { opacity: 0.5 } : { opacity: 1 })}
      onPress={onChange}
      checked={checked}>
      {checked && <MaterialCommunityIcons name="check" size={24} color="white" />}
    </CustomPressable>
  );
};
