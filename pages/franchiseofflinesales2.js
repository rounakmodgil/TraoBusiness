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

import { RadioButton } from "react-native-paper";

const windowHeight = Dimensions.get("window").height;

export default function FranchiseOfflineSales2({navigation}) {
  const [checked, setChecked] = useState("first");
  return (
      <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
    <View style={{ marginTop: 40,  }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <Text style={styles.text}>Payment Recieved</Text>

        <Text style={styles.text}>Successfully</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            marginLeft: 15,
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text>Send delivery to TRAO Boy</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text>Customer Pickup</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("franchisetab")}}>
        <View style={styles.container3}>
          <Text style={styles.text2}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    color: "#098D73",
    marginTop: 5,
    marginBottom: 5,
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
})