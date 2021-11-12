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

const SellerItem = () => {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image source={Milk} style={{ height: 50, width: 50 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              marginRight: 15,
              borderColor: "#ddd",
              borderWidth: 1,
              padding: 3,
              color: "black",
            }}
            placeholder="EnterQty"
          />

          <TouchableOpacity>
            <View
              style={{
                height: 35,
                width: 75,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#098D73",
              }}
            >
              <Text style={{ color: "#fff" }}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ marginRight: 20 }}>Toor Dal</Text>
        <Text style={{ marginRight: 20 }}>tr009</Text>
        <Text>1kg</Text>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 5 }}>
        <Text style={{ marginRight: 20 }}>Your Price : Rs.150</Text>
        <Text>Selling Price : Rs.200</Text>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 5 }}>
        <Text style={{ marginRight: 20 }}>Disc%:10%</Text>
        <Text>Card disc % : 5</Text>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text>Stock:200</Text>
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

export default SellerItem;
