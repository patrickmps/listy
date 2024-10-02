import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TagProps = TouchableOpacityProps & {
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  rotateIcon?: boolean;
  isDisable?: boolean;
};

export const Tag = ({
  title,
  iconName,
  isDisable = false,
  rotateIcon = false,
  ...rest
}: TagProps) => {
  return (
    <Container disabled={isDisable} {...rest}>
      <Icon name={iconName} style={rotateIcon ? { transform: [{ rotate: '90deg' }] } : {}} />
      <Title>{title}</Title>
    </Container>
  );
};
