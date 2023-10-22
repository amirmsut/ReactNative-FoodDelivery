import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const MenuComponent = ({ food }) => {
    return (
        <View>
            <Pressable
                style={{
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "row" }}>
                        {food.name}
                    </Text>
                    <Text>{food.price}</Text>
                    <Text style={{ marginTop: 5, borderRadius: 4 }}>
                        {[0, 0, 0, 0, 0].map((en, i) => (
                            <FontAwesome
                                // key={`${food.id}-${i}`}
                                style={{ paddingHorizontal: 3 }}
                                name={
                                    i < Math.floor(food.rating)
                                        ? "star"
                                        : "star-o"
                                }
                                size={15}
                                color="#FFD700"
                            />
                        ))}
                    </Text>
                    <Text
                        style={{
                            width: 180,
                            marginTop: 8,
                            color: "gray",
                            fontSize: 16,
                        }}
                    >
                        {food.description.length > 30
                            ? food.description.substr(0, 35) + "..."
                            : food.description}
                    </Text>
                </View>

                {/*  */}
                <Pressable style={{ marginRight: 10 }}>
                    <Image
                        style={{ width: 120, height: 120, borderRadius: 8 }}
                        source={{ uri: food.image }}
                    />
                    <Pressable
                        style={{
                            position: "absolute",
                            top: 90,
                            left: 20,
                            flexDirection: "row",
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            alignItems: "center",
                            backgroundColor: "white",
                            borderRadius: 5,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: "#018749",
                            }}
                        >
                            ADD
                        </Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </View>
    );
};
export default MenuComponent;
