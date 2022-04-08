import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Compra from "./screens/Compra";
import Carrinho from "./screens/Carrinho";
import Danones from "./screens/Danones";
import VerMais from "./screens/VerMais";
import VerMais2 from "./screens/VerMais2";
import Cadastro from "./screens/Cadastro";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
       {/* <Stack.Navigator options={{headerShow: false}}>
        {/* <Stack.Screen name="Compra" component={Compra} options={{headerShown: false}} />
        <Stack.Screen name="VerMais" component={VerMais} options={{headerShown: false}} />
        <Stack.Screen name="VerMais2" component={VerMais2} options={{headerShown: false}} /> 
      </Stack.Navigator>    */}

      <Drawer.Navigator initialRouteName="Carrinho" screenOptions={{drawerStyle: {
        backgroundColor: "white", 
      }}}>
        <Drawer.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Drawer.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Drawer.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}}/>
        <Drawer.Screen name="Danones" component={Danones} options={{headerShown: false}}/>
        <Drawer.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Drawer.Screen name="Mais Proteina" component={VerMais} options={{headerShown: false}}/>
        <Drawer.Screen name="Mais aminoácidos" component={VerMais2} options={{headerShown: false}}/>
        <Drawer.Screen name="Compra" component={Compra} options={{headerShown: false, drawerLabel: 'Melhor Whey Do Universo'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
