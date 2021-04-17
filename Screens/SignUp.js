import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Login(props) {
  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1 }}>
      <View
        style={{
          //backgroundColor: "violet",
          width: wp("50%"),
          height: hp("15%"),
          marginTop: 110,
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
        <Text style={{ fontSize: 16 }}>Create your account!</Text>
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
        placeholder="Continue Password"
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 80,
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
          Sign up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
          borderColor: "black",
          borderWidth: 0.5,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 80,
          fontSize: 11,
        }}
      >
        Already have an account? Log in
      </Text>
    </View>
  );
}

export default Login;
