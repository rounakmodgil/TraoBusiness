import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import Milk from "../asserts/milk.png"
export default function CartRecommend() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:10}}>
            <Image source={Milk} style={{height:80, width:80}}/>
            <View style={{marginLeft:10}}><Text style={{fontWeight:"bold"}}>Milk</Text>
            <Text style={{color:"#555"}}>Diary</Text></View>
        </View>
      <View style={{height:25, width:60, borderRadius:7, alignSelf:"center", backgroundColor:"#098D73", justifyContent:"center", alignItems:"center", marginTop:20}}><Text style={{color:"#fff"}}>Add +</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
   
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#EEE",
    marginLeft:10,
    marginRight:10,
    height:150,
    width:170
  },
  
});
