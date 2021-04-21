import React from "react";
import { View, Image, Text, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";

function Reviews({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("25%"),
          elevation: 3,
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "yellow",
            width: "30%",
            height: "100%",
            marginLeft: 15,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/5.jpg")}
          ></Image>
        </View>
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("40%"),
            height: hp("25%"),
            justifyContent: "center",
            marginRight: 60,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Men's RC3454 Formal Shoes</Text>
          <MaterialCommunityIcons
            style={{ marginTop: 10 }}
            name="star"
            size={18}
          />
        </View>
      </View>
      <AutoGrowingTextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("25%"),
          marginTop: 20,
          elevation: 3,
          paddingHorizontal: 10,
        }}
        placeholder={"More detailed reviews"}
      />
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 438,
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            height: "100%",
            width: "35%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons style={{}} name="camera" size={24} />
          <Text
            style={{
              fontSize: 15,
            }}
          >
            ADD IMAGE
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          FINISH
        </Text>
      </View>
    </View>
  );
}

export default Reviews;
