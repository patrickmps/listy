import { Container, Icon, Title } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type TagProps = {
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const Tag = ({ title, iconName }: TagProps) => {
  return (
    <Container>
      <Icon name={iconName} />
      <Title>{title}</Title>
    </Container>
  );
};
