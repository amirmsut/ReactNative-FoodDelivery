import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Components
import MenuComponent from "./MenuComponent";

const FoodItem = ({ item }) => {
    const data = [item];
    const [selected, setSelected] = useState(["Recommended"]);
    const handleItemSelect = (item) => {
        const itemSelected = selected.find((c) => c === item);
        if (itemSelected) {
            setSelected(selected.filter((sel) => sel !== item));
        } else {
            setSelected([...selected, item]);
        }
    };
    return (
        <View>
            {data.map((item, i) => (
                <>
                    <Pressable
                        onPress={() => handleItemSelect(item.name)}
                        style={{
                            margin: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        key={i}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            {item.name}
                        </Text>
                        <AntDesign name="down" size={24} color="black" />
                    </Pressable>

                    {selected.includes(item.name)
                        ? item.items.map((food, i) => (
                              <MenuComponent food={food} key={i} />
                          ))
                        : null}
                </>
            ))}
        </View>
    );
};
export default FoodItem;
