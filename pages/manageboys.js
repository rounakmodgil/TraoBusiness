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
} from "react-native";
import ManageBoysComponent from "../components/manageboyscomponent";
const windowHeight = Dimensions.get("window").height;

export default function ManageBoys() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
      <View
        style={{
          marginTop: 10,
       
        }}
      >
        <ManageBoysComponent/>
        <ManageBoysComponent/>
        <ManageBoysComponent/>
      </View>
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
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 15,
    borderWidth: 0.7,
    borderColor: "#000",
  },
  image: {
    height: 15,
    width: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  image2: {
    height: 15,
    width: 15,
    marginTop: 25,
    marginBottom: 5,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
  },
  headingtext:{
      fontWeight:"bold"
  }
});