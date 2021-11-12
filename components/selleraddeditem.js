import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Milk from "../asserts/milk.png";

const SellerAddedItem = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{alignItems:"center"}}>
            <Image source={Milk} style={{ height: 70, width: 70 }}/>
          <Text>Toor Dal</Text>
          <Text>tr009</Text>
        </View>
        <View>
          <View style={{marginVertical:5}}>
            <Text>1 kg - Rs 150</Text>
            <Text>Stock - 10</Text>
          </View>
          <View style={{marginVertical:5}}>
            <Text>2 kg - Rs 280</Text>
            <Text>Stock - 120</Text>
          </View >
          <View style={{marginVertical:5}}>
          <Text>Discount - 10%</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 30, width: 80, backgroundColor: "#098D73", justifyContent:'center', alignItems:'center' }}>
          <Text style={{ color: "#fff" }}>Delete</Text>
        </View>
        <View style={{ height: 30, width: 80, backgroundColor: "#098D73", justifyContent:'center', alignItems:'center' }}>
         
          <Text style={{ color: "#fff" }}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  addContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#098D73",
    borderRadius: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#098D73",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minus: {
    paddingRight: 5,
  },
  plus: {
    paddingLeft: 5,
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  textHead: {
    paddingBottom: 10,
    paddingTop: 5,
    color: "white",
    fontSize: 16,
  },
  text: {
    paddingBottom: 2,
    paddingTop: 2,
    color: "white",
    fontSize: 12,
  },
  text2: {
    color: "#23973F",
  },
});

export default SellerAddedItem;
