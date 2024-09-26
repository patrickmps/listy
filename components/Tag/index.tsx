import { Container, Icon, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TagProps = {
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  rotateIcon: boolean;
};

export const Tag = ({ title, iconName, rotateIcon }: TagProps) => {
  return (
    <Container>
      <Icon name={iconName} style={rotateIcon ? { transform: [{ rotate: '90deg' }] } : {}} />
      <Title>{title}</Title>
    </Container>
  );
};
