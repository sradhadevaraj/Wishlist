import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    image: require("../assets/MEN.png"),
    title: "FASHION",
    color: "#F7CEE2",
  },
  {
    id: "2",
    image: require("../assets/MEN.png"),
    title: "MOBILES",
    color: "#CCCAF0",
  },
  {
    id: "3",
    image: require("../assets/MEN.png"),
    title: "ELECTRONICS",
    color: "#F7E3CC",
  },
  {
    id: "4",
    image: require("../assets/MEN.png"),
    title: "FASHION",
    color: "#F7CEE2",
  },
  {
    id: "5",
    image: require("../assets/MEN.png"),
    title: "MOBILES",
    color: "#CCCAF0",
  },
  {
    id: "6",
    image: require("../assets/MEN.png"),
    title: "ELECTRONICS",
    color: "#F7E3CC",
  },
  {
    id: "7",
    image: require("../assets/MEN.png"),
    title: "FASHION",
    color: "#F7CEE2",
  },
  {
    id: "8",
    image: require("../assets/MEN.png"),
    title: "MOBILES",
    color: "#CCCAF0",
  },
  {
    id: "9",
    image: require("../assets/MEN.png"),
    title: "ELECTRONICS",
    color: "#F7E3CC",
  },
];

function Men(props) {
  const rendeItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: item.color,
        width: wp("29%"),
        height: hp("28%"),
        alignSelf: "center",
        margin: 5,
        marginTop: 20,
        elevation: 3,
      }}
    >
      <Image
        style={{
          width: "60%",
          height: "100%",
          marginLeft: 6,
          alignSelf: "flex-end",
        }}
        source={item.image}
      />
      <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 12 }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1, marginTop: 40 }}>
      <View
        style={{
          //backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("10%"),
          marginTop: 40,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          MEN
        </Text>
      </View>

      <View
        style={{
          //  backgroundColor: "cyan",
          width: wp("100%"),
          height: hp("110%"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          numColumns={3}
          data={DATA}
          renderItem={rendeItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Men;
