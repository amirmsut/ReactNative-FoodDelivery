import React from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            {/* Search Bar */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    margin: 10,
                    padding: 10,
                    borderColor: "#C0C0C0",
                    borderRadius: 7,
                }}
            >
                <TextInput
                    style={{ fontSize: 17 }}
                    placeholder="Search for restaurant item or more"
                />
                <AntDesign name="search1" size={24} color="black" />
            </View>

            {/* Image slider Component */}
            <Carousel />

            {/* Food ItemTypes */}
            <FoodTypes />
        </SafeAreaView>
    );
};
export default HomeScreen;
