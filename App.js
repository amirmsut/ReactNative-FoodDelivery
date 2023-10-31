import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/routes/StackNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
}
