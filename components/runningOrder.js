import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Shop from "../asserts/shop.png";
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RunningOrder({isEnabled}) {
  return (
    <View
      style={{
        marginTop: 20,
        height: 70,
        backgroundColor: "#EEE",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent:"center", alignItems: "center", height:26, width:26, borderRadius:13 ,backgroundColor:'#098D73' }}>
      
     
        <Text style={{ marginLeft: 3, color:"white", fontWeight:"bold" }}>P</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {isEnabled &&  <MaIcon name="purse" size={25} color={"#955A23"}/>}
        {!isEnabled &&  <MaIcon name="purse" size={25} color="gray" />}
     
        <Text style={{ marginLeft: 3 }}>051</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      {isEnabled &&   <MaIcon name="clock" size={25} color={"#1AB394"} />}
        {!isEnabled &&   <MaIcon name="clock" size={25} color="gray" />}
    
        <Text style={{ marginLeft: 3 }}>30 min</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      {isEnabled &&   <MaIcon name="map-marker" size={25} color="#A32B2B" />}
        {!isEnabled &&   <MaIcon name="map-marker" size={25} color="gray" />}
    
        <Text style={{ marginLeft: 3, marginRight:3 }}>KPHB Colony</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});