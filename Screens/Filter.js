import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Filter({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftside}>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}>Brand</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}>Discount</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}>Customer Ratings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}> Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftside1}>
          <Text style={styles.menuText}>Availability</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <View style={styles.right1}>
          <View style={styles.right2}></View>
          <Text style={styles.Rs1}>Rs.249 and Below</Text>
        </View>
        <View style={styles.right1}>
          <View style={styles.right2}></View>
          <Text style={styles.Rs1}>Rs.249 and Below</Text>
        </View>
        <View style={styles.right1}>
          <View style={styles.right2}></View>

          <Text style={styles.Rs1}>Rs.249 and Below</Text>
        </View>
        <View style={styles.right1}>
          <View style={styles.right2}></View>

          <Text style={styles.Rs1}>Rs.249 and Below</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.rs6}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Filter;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF9F6",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  leftside: {
    backgroundColor: "#EEEBE2",
    width: wp("50%"),
    height: hp("200%"),
  },
  leftside1: {
    backgroundColor: "#EEEBE2",
    width: "100%",
    height: "8%",
    justifyContent: "center",
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
  },
  customer: {
    marginLeft: 15,
    fontSize: 16,
  },
  left5: {
    backgroundColor: "#EEEBE2",
    width: "100%",
    height: "8%",
    marginTop: 5,
    justifyContent: "center",
  },
  offer: {
    marginLeft: 15,
    fontSize: 16,
  },
  left6: {
    backgroundColor: "#EEEBE2",
    width: "100%",
    height: "8%",
    marginTop: 5,
    justifyContent: "center",
  },
  availability: {
    marginLeft: 15,
    fontSize: 16,
  },
  right: {
    backgroundColor: "#FAF9F6",
    width: wp("50%"),
    height: hp("200%"),
  },
  right1: {
    // backgroundColor: "yellow",
    width: "100%",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  right2: {
    backgroundColor: "#FAF9F6",
    borderColor: "black",
    borderWidth: 1,
    height: "35%",
    width: "12%",
  },
  Rs1: {
    marginLeft: 10,
  },

  button: {
    backgroundColor: "#FFAA00",
    width: wp("50%"),
    height: hp("13%"),
    borderRadius: 40,
    marginTop: 320,
    justifyContent: "center",
    elevation: 3,
  },
  rs6: {
    fontSize: 18,
    alignSelf: "center",
  },
});
