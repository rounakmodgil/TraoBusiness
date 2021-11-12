import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

export default function BoyDelivered({ navigation }) {
  return (
    <View style={styles.mapMainContainer}>
      <View style={{ marginBottom: 30 }}>
        <Text style={{color:"#098D73", fontSize:24, fontWeight:"900", marginBottom:5}}>Congratulations</Text>
        <Text style={{textAlign:"center", fontWeight:"600", color:"#555"}}>Order Delivered</Text>
        <Text style={{textAlign:"center", fontWeight:"600", color:"#555"}}>Successfully</Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={{fontWeight:"600", color:"#555"}}>You Earned</Text>
        <Text style={{color:"#098D73", fontSize:24, fontWeight:"900", marginBottom:5}}>Rs. 300</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            {
              navigation.navigate("boytab");
            }
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Proceed</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mapMainContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
});
