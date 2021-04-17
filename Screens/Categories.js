import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  Image,
} from "react-native";
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
    id: "1",
    image: require("../assets/MEN.png"),
    title: "MOBILES",
    color: "#CCCAF0",
  },
  {
    id: "1",
    image: require("../assets/MEN.png"),
    title: "ELECTRONICS",
    color: "#F7E3CC",
  },
  {
    id: "1",
    image: require("../assets/MEN.png"),
    title: "FURNITURE",
    color: "#C5EABD",
  },
  {
    id: "1",
    image: require("../assets/MEN.png"),
    title: "SPORTS",
    color: "#87ceeb",
  },
];

function Fashion([navigation]) {
  const rendeItem = ({ item }) => (
    <View
      style={{
        // backgroundColor: "cyan",
        width: wp("90%"),
        height: hp("40%"),
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: item.color,
          width: wp("90%"),
          height: hp("35%"),
          alignSelf: "center",
          marginTop: 10,
          elevation: 3,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginLeft: 8,
            alignSelf: "center",
            marginLeft: 30,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Image
          style={{
            width: "25%",
            height: "100%",
            marginRight: 20,
            alignItems: "flex-end",
          }}
          source={item.image}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
        marginTop: 40,
      }}
    >
      <FlatList
        data={DATA}
        renderItem={rendeItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Fashion;
