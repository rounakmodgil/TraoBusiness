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
  Picker,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import FormNavigator from "../components/formnavigator";
const windowHeight = Dimensions.get("window").height;
const formNavigatorData=[
  {
    label:'Agency Details',
    navigate:'setup',
    status:true
  },
  {
    label:'Address',
    navigate:'setup2',
    status:true
  },
  {
    label:'Delivery Fee ',
    navigate:'deliveryfee',
    status:true
  },
  {
    label:'POD',
    navigate:'setup3',
    status:false
  }
]
export default function DeliveryFee({navigation}) {
  const [status, setStatus] = useState(-1);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
      <FormNavigator navigation={navigation} data={formNavigatorData} width={parseInt(60)}/>

      <View style={{height:40, marginVertical:20, borderBottomColor:"gray", borderBottomWidth:1}}>
                  <Picker
              selectedValue={selectedValue}
              style={{ flex:1,  color: "#555" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Select Category" value="Select Category" />
              <Picker.Item label="If user paid" value="If user paid" />
              <Picker.Item label="If trao mart paid" value="If user paid" />
              <Picker.Item label="If my shop paid" value="If user paid" />
              <Picker.Item label="If stock point paid" value="If user paid" />
            </Picker>
            </View>

        <Pressable
          onPress={() => {
            navigation.navigate("setup3");
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
    overflow: "hidden",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
  checkbox: {
    alignSelf: "center",
  },
});
