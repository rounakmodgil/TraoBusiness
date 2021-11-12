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
} from "react-native";
import Unassignedorder from "../components/unassignedorder";

const windowHeight = Dimensions.get("window").height;

export default function Unassigned() {
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <Unassignedorder />
        <Unassignedorder />
        <Unassignedorder />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
  },
  card: {
    overflow: "hidden",
    backgroundColor: "#FFF",
    height: 286,
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