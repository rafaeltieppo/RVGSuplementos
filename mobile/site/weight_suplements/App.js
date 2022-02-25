import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{headerShow: false}}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}