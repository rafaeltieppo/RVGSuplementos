import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Compra from "./screens/Compra";
import Carrinho from "./screens/Carrinho";
import Danones from "./screens/Danones";
import VerMais from "./screens/VerMais";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Danones" options={{headerShow: false}}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Compra" component={Compra} options={{headerShown: false}} />
        <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}} />
        <Stack.Screen name="Danones" component={Danones} options={{headerShown: false}} />
        <Stack.Screen name="VerMais" component={VerMais} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}