import {
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
} from "../redux/CartReducer";
import React from "react";
import { ScrollView, SafeAreaView, View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
// Icons
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const total = cart
        .map((item) => item.price * item.quantity)
        .reduce((curr, prev) => curr + prev, 0);

    return (
        <ScrollView style={{ marginTop: 50 }}>
            {total > 0 ? (
                <>
                    {/*  */}
                    <View
                        style={{
                            padding: 10,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="arrow-back"
                            size={24}
                            color="black"
                        />
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "600",
                                marginLeft: 3,
                            }}
                        >
                            {route.params.name}
                        </Text>
                    </View>

                    {/*  */}
                    <View
                        style={{
                            backgroundColor: "white",
                            padding: 15,
                            borderRadius: 8,
                            marginHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>
                            Ordering for Someone else ?
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                color: "#FF4500",
                            }}
                        >
                            Add Details
                        </Text>
                    </View>

                    {/*  */}
                    <View
                        style={{
                            marginTop: 16,
                            marginHorizontal: 15,
                            backgroundColor: "white",
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    >
                        {cart.map((item, index) => (
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 10,
                                }}
                                key={index}
                            >
                                <Text
                                    style={{
                                        width: 100,
                                        fontSize: 16,
                                        fontWeight: "600",
                                    }}
                                >
                                    {item.name}
                                </Text>

                                <Pressable
                                    style={{
                                        flexDirection: "row",
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        alignItems: "center",
                                        borderColor: "#BEBEBE",
                                        borderWidth: 0.5,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Pressable
                                        onPress={() => {
                                            dispatch(decrementQuantity(item));
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: "green",
                                                paddingHorizontal: 6,
                                                fontWeight: "600",
                                            }}
                                        >
                                            -
                                        </Text>
                                    </Pressable>

                                    <Pressable>
                                        <Text
                                            style={{
                                                fontSize: 19,
                                                color: "green",
                                                paddingHorizontal: 8,
                                                fontWeight: "600",
                                            }}
                                        >
                                            {item.quantity}
                                        </Text>
                                    </Pressable>

                                    <Pressable
                                        onPress={() => {
                                            dispatch(incrementQuantity(item));
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: "green",
                                                paddingHorizontal: 6,
                                                fontWeight: "600",
                                            }}
                                        >
                                            +
                                        </Text>
                                    </Pressable>
                                </Pressable>

                                <Text
                                    style={{ fontSize: 16, fontWeight: "bold" }}
                                >
                                    ${item.price * item.quantity}
                                </Text>
                            </View>
                        ))}
                    </View>
                </>
            ) : (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        Your Cart is empty
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};
export default CartScreen;
