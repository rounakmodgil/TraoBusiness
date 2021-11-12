import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
function OrderItem({ pack, navigation }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#eee",
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>
            Order ID
          </Text>
          <Text style={{ fontSize: 14, color: "#111" }}>565876879798756</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>
            Amount
          </Text>
          <Text style={{ fontSize: 14, color: "#111" }}>678</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>
            Date & Time
          </Text>
          <Text style={{ fontSize: 14, color: "#111" }}>
            10:33 AM, 11 Aug 2021
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>
            Amount
          </Text>
          <Text style={{ fontSize: 14, color: "#111" }}>160</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#e0e0e0",
          height: 30,
          marginVertical: 5,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginHorizontal:-10
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 10 }}>Pickup:</Text>
        <Text style={{ fontSize: 11 }}>
          FLat:102, Plot:53, Rishabh Residency, Kalyan Nagar Phase-3, Hyderabad.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#e0e0e0",
          height: 30,
          marginVertical: 5,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginHorizontal:-10
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 10 }}>Drop:</Text>
        <Text style={{ fontSize: 11 }}>
          FLat:102, Plot:53, Rishabh Residency, Kalyan Nagar Phase-3, Hyderabad.
        </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', height:45, backgroundColor:"#098D73"}}>
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:"#fff", fontSize:12}}>Delivered</Text>
        </View>
        <Pressable onPress={()=>{navigation.navigate("pickupmap")}}>
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:"#fff", fontSize:12}}>Navigate</Text>
        </View>
      </Pressable>
      </View>
    </View>
  );
}

export default OrderItem;

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
