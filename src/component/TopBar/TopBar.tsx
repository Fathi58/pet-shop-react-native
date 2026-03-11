// ---------- Imports ---------- //
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';
import { TopBarStyles } from './TopBar.styles';
const windowWidth = Dimensions.get('window').width;
// ---------- Props Interface ---------- //
interface TopbarProps {
  title?: string;
  onPress?: () => void;
  extraStyle?: StyleProp<ViewStyle>;
  close?: boolean;
  back?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  arrowStyle?: StyleProp<ImageStyle>;
}

// ---------- Topbar Functional Component ---------- //
const Topbar: React.FC<TopbarProps> = ({
  title,
  extraStyle,
  close,
  titleStyle,
}) => {
  const styles=TopBarStyles;
  return (
    <SafeAreaView style={[styles.safeContainer, extraStyle]}>
      <View
        style={[
          styles.container,
          extraStyle,
          { flexDirection: close ? 'row-reverse' : 'row' },
        ]}
      >

        {title && (
          <Text
            style={[
              styles.title,
              {
                paddingEnd:  scale(30),
                paddingStart: scale(30)
              },
              titleStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Topbar;
