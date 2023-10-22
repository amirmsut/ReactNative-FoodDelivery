import React from "react";
import { Pressable, Text, View, TextInput, ScrollView } from "react-native";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
    const data = hotels;
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

            {/* Filter buttons */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        width: 120,
                    }}
                >
                    <Text style={{ marginRight: 6 }}>Filter</Text>
                    <Ionicons name="filter" size={20} color="black" />
                </Pressable>
                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        width: 120,
                    }}
                >
                    <Text>Sort by rating</Text>
                </Pressable>
                <Pressable
                    style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#D0D0D0",
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                    }}
                >
                    <Text>Sort by price</Text>
                </Pressable>
            </View>

            {data.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ScrollView>
    );
};
export default HomeScreen;
