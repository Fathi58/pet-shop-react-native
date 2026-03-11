import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { SplashScreenStyles } from './SplashScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const styles = SplashScreenStyles;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main'); 
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../../assets/pet-logo.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Pet Shop</Text>
    </View>
  );
}

