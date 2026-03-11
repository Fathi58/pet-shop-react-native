import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  View
} from 'react-native';
import { LoaderStyles } from './Loader.styles';
import Modal from 'react-native-modal';


// ---------- Props Interface ---------- //
interface LoaderProps {
  msg?: string;
  visible: boolean;
  onBackdropPress?: () => void;
  onBackPress?: () => void;
  screenName?: string;
}

// ---------- Loader Functional Component ---------- //
const Loader: React.FC<LoaderProps> = ({
  msg = 'Loading...',
  visible,
  onBackdropPress,
  onBackPress,
}) => {
const styles=LoaderStyles;

  return (
    <Modal
      style={styles.modalCont}
      isVisible={visible}
      coverScreen={true}
      animationIn="slideInUp"
      animationOut="bounceOutDown"
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackPress}
      useNativeDriver={true}
    >
      <View style={styles.container}>
        <ActivityIndicator
          color={'grey'}
          animating={true}
          size={Platform.OS === 'android' ? 'large' : 'small'}
        />
        <Text style={styles.title}>{msg}</Text>
      </View>
    </Modal>
  );
};

export default Loader;
