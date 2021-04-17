import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function OrderPlaced(props) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
        marginTop: 40,
        alignItems: "center",
      }}
    >
      <View
        style={{
          // backgroundColor: "violet",
          width: wp("40%"),
          height: hp("40%"),
          marginTop: 140,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFAA00",
            width: "100%",
            height: "100%",
            borderRadius: 80,
            alignSelf: "center",
            elevation: 3,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons
            style={{
              alignSelf: "center",
            }}
            name="check"
            size={85}
            color="#FAF9F6"
          />
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("80%"),
          height: hp("7%"),
          marginTop: 10,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Order Placed
        </Text>
      </View>
      <View
        style={{
          //  backgroundColor: "yellow",
          width: wp("60%"),
          height: hp("7%"),
          marginTop: 10,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Thank you for purchasing. Your order will be shipped in 2-3 days
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 150,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default OrderPlaced;
