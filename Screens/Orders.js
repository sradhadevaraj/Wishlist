import React from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const DETAILS = [
  {
    id: "1",
    image: require("../assets/7.jpg"),
    title: "Delivered on Feb 24",
    subTitle: "Write a Review",
  },
  {
    id: "2",
    image: require("../assets/7.jpg"),
    title: "Delivered on Feb 24",
    subTitle: "Write a Review",
  },
  {
    id: "3",
    image: require("../assets/7.jpg"),
    title: "Delivered on Feb 24",
    subTitle: "Write a Review",
  },
  {
    id: "4",
    image: require("../assets/7.jpg"),
    title: "Delivered on Feb 24",
    subTitle: "Write a Review",
  },
];

function Orders({ navigation }) {
  const _productrenderitem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        width: wp("90%"),
        height: hp("35%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginVertical: 5,
        elevation: 3,
      }}
    >
      <View
        style={{
          // backgroundColor: "red",
          width: wp("35%"),
          height: hp("35%"),
        }}
      >
        <Image style={{ width: "100%", height: "100%" }} source={item.image} />
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("45%"),
          height: hp("35%"),
          justifyContent: "center",
          marginRight: 25,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <MaterialCommunityIcons
          style={{ marginTop: 20 }}
          name="star"
          size={18}
        />

        <Text
          style={{ marginTop: 5, fontSize: 13 }}
          onPress={() => navigation.navigate("Reviews")}
        >
          {item.subTitle}
        </Text>
      </View>
    </View>
  );
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
          height: hp("20%"),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("90%"),
            height: hp("12%"),
            elevation: 3,
            borderRadius: 40,
            marginLeft: 15,
            alignItems: "center",
            paddingLeft: 10,
            flexDirection: "row",
          }}
        >
          <FontAwesome5 name="search" size={15} color="#C0C0C0" />
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              fontSize: 13,
              marginLeft: 10,
            }}
            placeholder="Search your order here"
          />
        </View>
      </View>

      <FlatList
        data={DETAILS}
        renderItem={_productrenderitem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Orders;
