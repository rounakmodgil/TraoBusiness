import React, { useState, useRef } from "react";
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
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const windowHeight = Dimensions.get("window").height;
const list = [
  {
    title: "Personal Details",
    name: "user-shield",
    nav: "boypersonalsettings",
  },
  {
    title: "KYC",
    name: "certificate",
    nav: "boykycsettings",
  },
  {
    title: "Change Password",
    name: "key",
    nav: "boypasswordsettings",
  },
  {
    title: "Add Vehicle",
    name: "motorcycle",
    nav: "boyvehiclesettings",
  },
  {
    title: "Pickup Settings",
    name: "meter",
    nav: "boypickupsettings",
  },
];
export default function BoySettings({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [status, setStatus] = useState(-1);
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          {list.map((l) => (
            <Pressable
              style={{ flex: 1 }}
              onPress={() => {
                navigation.navigate(l.nav);
              }}
            >
              <View
                style={{
                  height: 60,
                  borderBottomWidth: 1,
                  borderBottomColor: "#EEE",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome5Icon name={l.name} size={12} color={"gray"} />
                <Text style={{ marginLeft: 10 }}>{l.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        
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
