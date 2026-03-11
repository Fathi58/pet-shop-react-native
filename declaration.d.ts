declare module 'react-native-modal' {
  import { Component } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  interface ModalProps {
    isVisible: boolean;
    animationIn?: string;
    animationOut?: string;
    onBackdropPress?: () => void;
    style?: StyleProp<ViewStyle>;
  }

  export default class Modal extends Component<ModalProps> {}
}
