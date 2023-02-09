import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {
  MD3DarkTheme as DefaultTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import PaymentScreen from './Src/Screens/PaymentScreen';
import HomeScreen from './Src/Screens/HomeScreen';
import Featured from './Src/Components/Featured';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FA6B1D',
    secondary: '#24263F',
    tertiary: '#76B544',
    // brandPrimary: '#',
    // brandSecondary: 'red',
  },
};
export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

function App() {
  return (
    // If you have another provider (such as Redux), wrap it outside PaperProvider so that the context is available to components rendered inside a Modal from the library
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Group>
            <Stack.Screen name="home" component={HomeScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="payment" component={PaymentScreen} />
          </Stack.Group> */}
          <Stack.Group>
            <Stack.Screen name="featured" component={Featured} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
