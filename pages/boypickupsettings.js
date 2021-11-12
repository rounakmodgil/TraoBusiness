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
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const windowHeight = Dimensions.get("window").height;

export default function BoyPickupSettings({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [status, setStatus] = useState(-1);
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
       
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginVertical: 10,
            width: "100%",
            marginTop: 40,
          }}
        >
          <CheckBox
            tintColors={{ true: "#098D73", false: "#555" }}
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text>I accept Pay On Delivery</Text>
        </View>

        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 5,
            marginBottom: 15,
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
          placeholder={"Pickup Radius"}
        />
        <Pressable onPress={() => {}}>
          <View style={styles.container3}>
            <Text style={styles.text2}>Update</Text>
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
    overflow: "hidden",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  checkbox: {
    alignSelf: "center",
  },
});
