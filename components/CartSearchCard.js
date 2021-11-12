import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const data = [
  {
    title: "Porus Grocery",
    sybtitle: "Fresh Veggies",
    rating: "3.5",
    image: require("../asserts/grocery2.jpeg"),
  },
  {
    title: "Sharma Grocery",
    sybtitle: "Fresh Veggies",
    rating: "3.8",
    image: require("../asserts/grocery2.jpeg"),
  },
];

const CartSearchCard = ({ navigation }) => {
  
  return (
  
     
      <View style={{flexDirection:"row", alignItems:"center", marginLeft:15, marginTop:15, paddingBottom:10, borderBottomWidth:1, borderBottomColor:"#EEE"}}>
          <Image source={require("../asserts/grocery2.jpeg")} style={{height:90, width:90}}/>
          <View style={{marginLeft:30}}>
              <Text>FJ Trade</Text>
              <Text>0.9km, Vivekananda Nagar</Text>
              <Text>28 min </Text>
              <View style={{flexDirection:"row"}}><Text>stars</Text><Text>Free deliver/low delivery fee</Text></View>
          </View>
      </View>

  );
};

const styles = StyleSheet.create({
  tile: {
    height: 100,
    width: 160,
  },
});

export default CartSearchCard;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   Pressable,
//   FlatList,
//   TouchableWithoutFeedback,
// } from "react-native";
// const Home = ({ navigation }) => {
//   return(
//     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}><Text>Home</Text></View>
//   );
// };
// export default Home;
