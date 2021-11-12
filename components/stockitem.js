import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
  CheckBox,
  Picker,
} from "react-native";


const windowHeight = Dimensions.get("window").height;

export default function Stock() {
  return (
    <View style={{ marginTop: 20, borderWidth:1, borderColor:"#ddd", borderRadius:8, padding:10, paddingVertical:15, marginHorizontal:5, overflow:'hidden' }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems:'center' }}>
        <Image
          style={{ height: 100, width: 100, marginRight:40 }}
          source={require("../asserts/milk.png")}
        />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 3 }}>
            Amul Milk
          </Text>
          <Text style={{ color: "grey", marginBottom: 2 }}>500ml</Text>
          <Text style={{ color: "grey" }}>Rs. 250</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
         
        }}
      >
        <View>
          <Text style={styles.heading}>Brand</Text>
          <Text style={styles.text}>Amul</Text>
        </View>
        <View>
          <Text style={styles.heading}>Category</Text>
          <Text style={styles.text}>Dairy</Text>
        </View>
        <View>
          <Text style={styles.heading}>Stock Left</Text>
          <Text style={styles.text}>
            <Text style={styles.minus}>106</Text>/
            <Text style={styles.plus}>300</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>Price</Text>
          <Text style={styles.text}>Rs. 250 </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
  },
  heading: {
    fontWeight: "bold",
  },
  plus: {
    color: "green",
  },
  minus: {
    color: "red",
  },
});