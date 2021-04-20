import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./src/screens/MainScreen";
import ProductDetails from "./src/screens/ProductDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Product" component={ProductDetails} />
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
