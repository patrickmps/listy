import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import { CustomDropdown } from './styles';

type SelectProps = DropdownProps<{ name: string; value: string }> & {};

export const Select = ({ ...props }: SelectProps) => {
  return <CustomDropdown {...props} />;
};
