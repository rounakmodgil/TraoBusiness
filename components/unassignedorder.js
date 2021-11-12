import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Box from "../asserts/box.png";
export default function Unassignedorder({}) {
  return (
    <View style={styles.card}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ TextAlign: "center" }}>Order Id: 280 </Text>
        <Text style={{ TextAlign: "center" }}>Location: KPHB </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 20,
        }}
      >
        <Text style={{ TextAlign: "center" }}>Delivery Fee: 200 </Text>
        <Text style={{ TextAlign: "center" }}>Distance: 10 km </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 9,
          marginTop: 2,
          backgroundColor: "#EEE",
        }}
      >
        <Image
          source={Box}
          style={{ height: 15, width: 15, resizemode: "contain" }}
        />
        <View style={{ flexDirection: "row", marginLeft: 3 }}>
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "bold" }}>
            Pick Up:{" "}
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            FLat-102, Rishab Residency, Kalyan Nagar, Hyderabad.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 9,
          backgroundColor: "#EEE",
          marginTop: 2,
        }}
      >
        <Image
          source={Box}
          style={{ height: 15, width: 15, resizemode: "contain" }}
        />
        <View style={{ flexDirection: "row", marginLeft: 3 }}>
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "bold" }}>
            Pick Up:{" "}
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            FLat-102, Rishab Residency, Kalyan Nagar, Hyderabad.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 9,
          backgroundColor: "#EEE",
          marginTop: 2,
        }}
      >
        <Image
          source={Box}
          style={{ height: 15, width: 15, resizemode: "contain" }}
        />
        <View style={{ flexDirection: "row", marginLeft: 3 }}>
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "bold" }}>
            Pick Up:{" "}
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            FLat-102, Rishab Residency, Kalyan Nagar, Hyderabad.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 9,
          backgroundColor: "#EEE",
          marginTop: 2,
        }}
      >
        <Image
          source={Box}
          style={{ height: 15, width: 15, resizemode: "contain" }}
        />
        <View style={{ flexDirection: "row", marginLeft: 3 }}>
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "bold" }}>
            Pick Up:{" "}
          </Text>
          <Text style={{ fontSize: 12, color: "#555" }}>
            FLat-102, Rishab Residency, Kalyan Nagar, Hyderabad.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
          backgroundColor: "blue",
        }}
      >
        <View
          style={{
            backgroundColor: "#347937",
            width: "50%",
            height: 43,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>ACCEPT</Text>
        </View>
        <View
          style={{
            backgroundColor: "tomato",
            width: "50%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 42,
          }}
        >
          <Text style={{ color: "#fff" }}>DECLINE</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    backgroundColor: "#FFF",
    height: 275,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
    width: "95%",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
});