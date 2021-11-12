import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { RadioButton } from "react-native-paper";
import FormNavigator from "../components/formnavigator";

const windowHeight = Dimensions.get("window").height;
const formNavigatorData=[
  {
    label:'Verify Phone',
    navigate:'addboysverify',
    status:true
  },
  {
    label:'Personal',
    navigate:'addboys',
    status:true
  },
  {
    label:'KYC',
    navigate:'addboys2',
    status:false
  },
  {
    label:'Address',
    navigate:'addboys3',
    status:false
  }
]
export default function AddBoys({ navigation }) {
  const [status, setStatus] = useState(-1);
  const [checked, setChecked] = React.useState("first");
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
      <FormNavigator navigation={navigation} data={formNavigatorData} width={parseInt(30)}/>
        <View>
          <View>
            <Text
              style={{
                color: "#098D73",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Personal Details
            </Text>

            <TextInput
              style={{
                borderBottomWidth: 1,
                marginTop: 15,
                marginBottom: 15,
                color: "#000",
                borderBottomColor: status === 1 ? "#0E7783" : "gray",
              }}
              onFocus={() => {
                setStatus(1);
              }}
              onBlur={() => {
                setStatus(-1);
              }}
              placeholderTextColor="#555"
              placeholder={"Boy ID"}
            />

            <TextInput
              style={{
                borderBottomWidth: 1,
                marginTop: 18,
                marginBottom: 18,
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
              placeholder={"Boy Name"}
            />

            <TextInput
              style={{
                borderBottomWidth: 1,
                marginTop: 18,
                marginBottom: 18,
                color: "#000",
                borderBottomColor: status === 4 ? "#0E7783" : "gray",
              }}
              onFocus={() => {
                setStatus(4);
              }}
              onBlur={() => {
                setStatus(-1);
              }}
              placeholderTextColor="#555"
              placeholder={"Alternate Phone Number"}
            />
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginTop: 18,
                marginBottom: 18,
                color: "#000",
                borderBottomColor: status === 5 ? "#0E7783" : "gray",
              }}
              onFocus={() => {
                setStatus(5);
              }}
              onBlur={() => {
                setStatus(-1);
              }}
              placeholderTextColor="#555"
              placeholder={"Email ID"}
            />
          </View>
        </View>
        <Text style={{color:"#555", marginTop:20}}>Payment Mode</Text>
        <View style={{marginBottom:20, }}>
         
          <View style={{width:130, }}>
        <View
          style={{
            flexDirection: "row",
            
            alignItems: "center",
            marginTop:10
          }}
        >
          <RadioButton
            color={"#347937"}
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text> Salary</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          
            alignItems: "center",
            marginBottom:10
          }}
        >
          <RadioButton
            color={"#347937"}
            value="first"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Commission</Text>
        </View>
        </View>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("addboys2");
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Proceed</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    color: "#000",
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
