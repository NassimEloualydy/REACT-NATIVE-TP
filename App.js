import React from 'react';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';  // Import Stack Navigator
import LoginScreen from './app/Screens/LoginScreen';
import SignInScreen from './app/Screens/SignInScreen';
const Stack = createStackNavigator();  // Create the stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Home"> 
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;