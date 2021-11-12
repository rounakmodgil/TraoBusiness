import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Animated, Text, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import Logo from "../asserts/logo.png";
const Deliverysellersignup = ({ navigation, route }) => {
  //State for ActivityIndicator animation
  const {Varloginscreen, Varsellersignup, Varridersignup}=route.params;
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center" }}>
      <Image source={Logo} style={{ height: 120, width: 50, alignSelf:"center", marginTop:80 }} />
        <View style={{  flex:1, alignItems:"center", marginTop:100}}>
          <Text style={{textAlign:"center", marginBottom:30, fontSize:25, textAlign:"center"}}>Signup as</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              color={"#347937"}
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text> Delivery Partner</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              color={"#347937"}
              value="first"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text>Seller / Franchise</Text>
          </View>
          <TouchableOpacity onPress={()=>{{if(checked==="first"){Varridersignup(true); Varloginscreen(false); }else{Varsellersignup(true); Varloginscreen(false); }}}}>
        <View style={styles.container3}><Text style={styles.text2}>Next</Text></View>
       </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default Deliverysellersignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  container3:{
    paddingHorizontal:50,
    paddingVertical:10,
    marginHorizontal:35,
    borderColor:"green",
    borderWidth:1,
    marginBottom:10,
    marginTop:10,
    borderRadius:25,
    backgroundColor:"#098D73",
    justifyContent:"center",
    alignItems:"center",
    marginTop:40
  },
  text2:{
    color:"white",
    fontSize:16,

  },
});
