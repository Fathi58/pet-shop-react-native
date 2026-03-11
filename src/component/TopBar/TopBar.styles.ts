import { Platform, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { windowWidth } from '../../constants/constants';

export const TopBarStyles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#00000000',
    paddingTop: Platform.OS === 'android' ? scale(25) : undefined,
  },
  container: {
    height: scale(20),
    width: windowWidth,
    backgroundColor: '#00000000',
    alignItems: 'center',
    paddingHorizontal: scale(24),
  },
  imageBtn: {
    height: scale(30),
    width: scale(30),
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: 'Black',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  closeImage: {
    height: scale(16),
    width: scale(16),
    resizeMode: 'contain',
  },
});
