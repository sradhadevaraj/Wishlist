import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileDetails({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#C0C0C0",
          width: wp("100%"),
          height: hp("40%"),
          elevation: 3,

          alignItems: "center",
          elevation: 3,
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("30%"),
            height: hp("30%"),

            borderColor: "black",
            borderWidth: 0.8,
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <MaterialCommunityIcons
            style={{ alignSelf: "center" }}
            name="camera"
            size={40}
          />
        </View>
      </View>
      <Text
        style={{ marginLeft: 15, marginTop: 30, fontSize: 10, color: "grey" }}
      >
        Mobile Number
      </Text>
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 8,
          paddingLeft: 10,
        }}
        placeholder="854126556"
        placeholderTextColor="black"
      />
      <Text
        style={{ marginLeft: 15, marginTop: 15, fontSize: 10, color: "grey" }}
      >
        Full Name
      </Text>
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 8,
          paddingLeft: 10,
        }}
        placeholder="Justin"
        placeholderTextColor="black"
      />
      <Text
        style={{ marginLeft: 15, marginTop: 15, fontSize: 10, color: "grey" }}
      >
        Email
      </Text>
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 8,
          paddingLeft: 10,
        }}
        placeholder="justin@gmail.com"
        placeholderTextColor="black"
      />
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          alignSelf: "center",
          marginTop: 35,
          justifyContent: "center",
          flexDirection: "row",
          elevation: 3,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            height: "100%",
            width: "50%",
            borderColor: "black",
            borderWidth: 0.5,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            style={{ marginLeft: 53 }}
            name="check"
            size={20}
          />
          <Text
            style={{
              marginRight: 53,
            }}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            height: "100%",
            width: "50%",
            borderColor: "black",
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),

          justifyContent: "center",
          alignSelf: "center",
          elevation: 3,
          marginTop: 60,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            fontSize: 16,
            alignSelf: "center",
          }}
        >
          Save Details
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileDetails;
