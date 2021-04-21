import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function SignUp({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1 }}>
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
        placeholder="Confirm password"
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 120,
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
          Sign up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 15,
          borderRadius: 40,
          justifyContent: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
          }}
        >
          Continue With Google
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          marginTop: 70,
          fontSize: 11,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}

export default SignUp;
