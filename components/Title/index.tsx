import { TextProps } from 'react-native';
import { TitleText } from './styles';

export const Title = (props: TextProps) => {
  return <TitleText {...props}>{props.children}</TitleText>;
};
