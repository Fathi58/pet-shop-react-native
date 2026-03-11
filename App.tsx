import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
