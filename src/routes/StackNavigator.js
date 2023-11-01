import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default StackNavigator;
