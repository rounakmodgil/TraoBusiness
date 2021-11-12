import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
function FranchiseOnlineOrderItem({ pack, navigation }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#eee",
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 7,
      }}
    >
      <View style={styles.mainContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text>ORDER ID</Text>
          <Text>Total Items</Text>
          <Text>Date &Time</Text>
          <Text>Amount</Text>
          <Text>Trao Boy Name: Vijay</Text>
          <Text>Trao Boy ID: TR998</Text>
          <Text>OTP: 7898</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text>Rs 1500</Text>
          <Text>Status</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#098D73",
          height: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Text style={{color:"white"}}>Cancel</Text>
        
        <Pressable onPress={()=>{navigation.navigate("franchiseonlineorders2")}}>
        <Text  style={{color:"white"}}>Pack Items</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default FranchiseOnlineOrderItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,

    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    flexDirection: "row",
  },
});
