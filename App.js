import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./screens/Home"
import Casa from "./screens/Casa"
import Login from './screens/Login'
import Imc from './screens/Imc'
import Basal from './screens/Basal'
import PI from './screens/Pi'
import AI from './screens/AI'
import Alterar from './screens/AlterarDados'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="casa" component={Casa}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="imc" component={Imc}/>
        <Stack.Screen name="basal" component={Basal}/>
        <Stack.Screen name="pi" component={PI}/>
        <Stack.Screen name="ai" component={AI}/>
        <Stack.Screen name="al" component={Alterar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row"
  }
});

export default Navigation;



