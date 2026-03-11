import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import PetListScreen from '../screens/PetListScreen/PetListScreen';
import AddPetScreen from '../screens/AddPetScreen/AddPetScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import { RootStackParamList, MainTabParamList } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();


function MainTabs() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.length;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';
          if (route.name === 'Pets') iconName = 'paw-outline';
          else if (route.name === 'AddPet') iconName = 'add-circle-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Pets" component={PetListScreen} />
      <Tab.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{ title: 'Add Pet' }}
      />
      <Tab.Screen name="Cart" component={CartScreen} options={{tabBarBadge:cartCount >0?cartCount:undefined}}/>
    </Tab.Navigator>
  );
}


function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main'); 
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <StatusBar hidden />
      <Image
        source={require('../assets/images/pet-logo.jpg')}
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to Pet Shop</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 150, height: 150, marginBottom: 20 },
  text: { fontSize: 24, fontWeight: 'bold', color: '#333' },
});
