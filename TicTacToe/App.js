import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import Rules from "./src/screens/Rules";
import Credits from "./src/screens/Credits";
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Home" }}  
        />
        <Stack.Screen 
          name="Rules" 
          component={Rules} 
          options={{ title: "Game Rules" }}  
        />
        <Stack.Screen 
          name="Credits" 
          component={Credits} 
          options={{ title: "Credits" }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
