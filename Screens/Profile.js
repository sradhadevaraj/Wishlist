import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Profile({ navigation }) {
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
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          elevation: 3,
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("30%"),
            height: hp("30%"),
            marginLeft: 15,
            borderColor: "black",
            borderWidth: 0.8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/prof.jpg")}
          />
        </View>
        <View
          style={{
            //backgroundColor: "yellow",
            width: wp("40%"),
            height: hp("15%"),
            justifyContent: "center",
            marginRight: 65,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Jaison Moscow
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,

          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Orders
        </Text>
        <MaterialCommunityIcons
          style={{
            marginRight: 15,
          }}
          name="chevron-right"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          marginTop: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Wishlist")}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Wishlist
        </Text>
        <MaterialCommunityIcons
          style={{
            marginRight: 15,
          }}
          name="chevron-right"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          marginTop: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Address")}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Address
        </Text>
        <MaterialCommunityIcons
          style={{
            marginRight: 15,
          }}
          name="chevron-right"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          marginTop: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Selected")}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Coupons
        </Text>
        <MaterialCommunityIcons
          style={{
            marginRight: 15,
          }}
          name="chevron-right"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          marginTop: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("ProfileDetails")}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 16,
          }}
        >
          Profile Details
        </Text>
        <MaterialCommunityIcons
          style={{
            marginRight: 15,
          }}
          name="chevron-right"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          //backgroundColor: "green",
          width: wp("23%"),
          height: hp("10%"),
          marginLeft: 15,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          alignSelf: "flex-start",
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <MaterialCommunityIcons style={{}} name="logout" size={20} />
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
