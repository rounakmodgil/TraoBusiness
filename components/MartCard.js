import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";

export default function MartCard({
  title,
  subtitle,
  image,
  profile,
  mark,
  price,
  rating,
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View
        style={{
          flexDirection: "row",
        }}
      >
       

        <View
          style={{
            margin: 10,
            marginLeft: 10,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize:15,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
            
              alignItems: "center",
            }}
          >
     
            <Text style={{fontSize:12}}>{subtitle}</Text>
          </View>
        </View>
        <View
          style={{
            alignContent: "flex-end",
            //justifyContent:"flex-end",
            alignItems: "flex-end",
            right: 15,
            top: 10,
          }}
        >

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../asserts/star2.png")}
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
              }}
            />
            <Text>{rating}/5.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  card: {
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});