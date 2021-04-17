import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Login({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1, marginTop: 40 }}>
      <View
        style={{
          //backgroundColor: "violet",
          width: wp("50%"),
          height: hp("15%"),
          marginTop: 80,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View
        style={{
          // backgroundColor: "cyan",
          width: wp("90%"),
          height: hp("10%"),
          marginLeft: 15,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 16 }}>Log in your account!</Text>
      </View>
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 10,
          paddingLeft: 10,
        }}
        placeholder="Email"
      />
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 15,
          paddingLeft: 10,
        }}
        placeholder="Password"
        secureTextEntry
      />
      <View
        style={{
          // backgroundColor: "cyan",
          width: wp("23%"),
          height: hp("6%"),
          justifyContent: "center",
          alignSelf: "flex-end",
          marginRight: 15,
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: 10,
          }}
        >
          Forgot password?
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
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 80,
          fontSize: 11,
        }}
        onPress={() => navigation.navigate("SignUp")}
      >
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

export default Login;
