import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store, RootState, loadState } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { customLightTheme, customDarkTheme } from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const NavigationWrapper = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const theme = isDarkMode ? customDarkTheme : customLightTheme;

  useEffect(() => {
    loadState();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationWrapper />
      </SafeAreaProvider>
    </Provider>
  );
}
