import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Compra from "./screens/Compra";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" options={{headerShow: false}}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Compra" component={Compra} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}