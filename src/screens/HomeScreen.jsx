import React from "react";
import { SafeAreaView, Text, View, TextInput, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";

const HomeScreen = () => {
    return (
        <ScrollView style={{ marginTop: 50 }}>
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

            {/* Quick Food Components */}
            <QuickFood />
        </ScrollView>
    );
};
export default HomeScreen;
