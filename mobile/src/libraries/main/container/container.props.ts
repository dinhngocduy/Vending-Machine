import { ViewStyle } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { ReactNode } from 'react';

export interface ContainerProps {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
  title?: string;
  titleKey?: string;
  showBackBtn?: boolean;
  onBack?: () => void;
  style?: ViewStyle;
  children: ReactNode;
  noKeyboardAvoidingView?: boolean;
  iconRight?: string;
  onPressRight?: () => void;
}
