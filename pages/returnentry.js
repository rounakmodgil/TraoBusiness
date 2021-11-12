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
} from "react-native";
import { DataTable } from 'react-native-paper';

const windowHeight = Dimensions.get("window").height;

export default function ReturnEntry() {
  const [orderID, setOrderID] = useState("");
  const [userID, setUserID] = useState("");
  const [itemID, setItemID] = useState("");
  const [status, setStatus] = useState(-1);

  return (
    <SafeAreaView style={styles.page5container}>
      <View >
      <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 20,
              marginBottom: 15,
              color: "#000",
              borderBottomColor: status === 2 ? "#0E7783" : "gray",
            }}
            onFocus={() => {
              setStatus(2);
            }}
            onBlur={() => {
              setStatus(-1);
            }}
            placeholderTextColor="#555"
            placeholder={"Order ID"}
          />
         <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 20,
              marginBottom: 15,
              color: "#000",
              borderBottomColor: status === 2 ? "#0E7783" : "gray",
            }}
            onFocus={() => {
              setStatus(2);
            }}
            onBlur={() => {
              setStatus(-1);
            }}
            placeholderTextColor="#555"
            placeholder={"User ID"}
          />
         <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 20,
              marginBottom: 15,
              color: "#000",
              borderBottomColor: status === 2 ? "#0E7783" : "gray",
            }}
            onFocus={() => {
              setStatus(2);
            }}
            onBlur={() => {
              setStatus(-1);
            }}
            placeholderTextColor="#555"
            placeholder={"Item ID"}
          />
          <TouchableOpacity onPress={()=>{{Varloginscreen(false); Vartabscreen(true) } }}>
        <View style={styles.container3}><Text style={styles.text2}>Update</Text></View>
       </TouchableOpacity>
        <DataTable>
      <DataTable.Header>
        <DataTable.Title>Order ID</DataTable.Title>
        <DataTable.Title numeric>User ID</DataTable.Title>
        <DataTable.Title numeric>Item ID</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Visa Card</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Visa Card</DataTable.Cell>
        <DataTable.Cell numeric>99999999</DataTable.Cell>
        <DataTable.Cell numeric>99999999</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Visa Card</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      </DataTable>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,

    overflow: "hidden",
    backgroundColor:"#fff"
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
  container3:{
    paddingHorizontal:50,
    paddingVertical:10,
    marginHorizontal:35,
    borderColor:"#098D73",
    borderWidth:1,
    marginBottom:10,
    marginTop:10,
    borderRadius:25,
    backgroundColor:"#098D73",
    justifyContent:"center",
    alignItems:"center",
    marginTop:30
  },
  text2:{
    color:"white",
    fontSize:16,
  },
});
