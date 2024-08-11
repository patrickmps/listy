import { ViewProps } from 'react-native';
import { SContainer } from './styles';

export const ScreenContainer = (props: ViewProps) => {
  return <SContainer {...props}>{props.children}</SContainer>;
};
