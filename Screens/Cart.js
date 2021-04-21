import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Cart({ navigation }) {
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
          height: hp("15%"),
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginLeft: 15,
          }}
        >
          Deliver to Aroor - 688564
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("25%"),
            height: hp("10%"),
            borderColor: "black",
            borderWidth: 0.5,
            justifyContent: "center",
            marginRight: 15,
          }}
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={{ alignSelf: "center" }}>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("100%"),
            height: hp("50%"),
            elevation: 3,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              // backgroundColor: "cyan",
              width: wp("45%"),
              height: hp("15%"),
              marginLeft: 15,
              marginTop: 30,
            }}
          >
            <Text>RUNNING ADIZERO ADIOS 5 SHOES</Text>
            <Text>9,000</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FAF9F6",
                width: wp("25%"),
                height: hp("10%"),
                borderColor: "black",
                borderWidth: 0.5,
                justifyContent: "center",
                marginRight: 15,
                marginTop: 30,
              }}
            >
              <Text style={{ alignSelf: "center" }}>remove</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "yellow",
              width: wp("40%"),
              height: hp("40%"),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("100%"),
            height: hp("50%"),
            elevation: 3,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              // backgroundColor: "cyan",
              width: wp("45%"),
              height: hp("15%"),
              marginLeft: 15,
              marginTop: 30,
            }}
          >
            <Text>RUNNING ADIZERO ADIOS 5 SHOES</Text>
            <Text>9,000</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FAF9F6",
                width: wp("25%"),
                height: hp("10%"),
                borderColor: "black",
                borderWidth: 0.5,
                justifyContent: "center",
                marginRight: 15,
                marginTop: 30,
              }}
            >
              <Text style={{ alignSelf: "center" }}>remove</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "yellow",
              width: wp("40%"),
              height: hp("40%"),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("100%"),
            height: hp("50%"),
            elevation: 3,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              // backgroundColor: "cyan",
              width: wp("45%"),
              height: hp("15%"),
              marginLeft: 15,
              marginTop: 30,
            }}
          >
            <Text>RUNNING ADIZERO ADIOS 5 SHOES</Text>
            <Text>9,000</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FAF9F6",
                width: wp("25%"),
                height: hp("10%"),
                borderColor: "black",
                borderWidth: 0.5,
                justifyContent: "center",
                marginRight: 15,
                marginTop: 30,
              }}
            >
              <Text style={{ alignSelf: "center" }}>remove</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "yellow",
              width: wp("40%"),
              height: hp("40%"),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            width: wp("19%"),
            height: hp("15%"),
            marginLeft: 15,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: wp("4%"),
              height: hp("4%"),
            }}
            source={require("../assets/rupee.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>6,700</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: wp("30%"),
            height: hp("13%"),
            // borderRadius: 40,
            marginRight: 15,
            borderColor: "black",
            borderWidth: 0.5,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Order")}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cart;
