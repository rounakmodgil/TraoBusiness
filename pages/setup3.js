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
    status:true
  }
]
export default function Setup3({navigation}) {
  const [status, setStatus] = useState(-1);
  const [regimage, regsetImage] = useState(null);
  const [gstimage, gstsetImage] = useState(null);
  const [panimage, pansetImage] = useState(null);
  const [shopimage, shopsetImage] = useState(null);
  const regref = useRef();
  const gstref = useRef();
  const panref = useRef();
  const shopref = useRef();
  const [agencyName, setAgencyName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [landPhone, setLandPhone] = useState("");
  const [email, setEmail] = useState("");
  const [regDoc, setRegDoc] = useState("");
  const [pan, setPan] = useState("");
  const [panDoc, setPanDoc] = useState("");
  const [gstNo, setGst] = useState("");
  const [gstDoc, setGstDoc] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [house, setHouse] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [minWC, setminWC] = useState("");
  const [aboveMW, setAboveMW] = useState("");
  const [minDC, setMinDC] = useState("");
  const [aboveDC, setAboveDC] = useState("");
  const [maxW, setMaxW] = useState("");
  const [acceptPay, setAcceptPay] = useState("");
  const [isSelected, setSelection] = useState(false);
  
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
      <FormNavigator navigation={navigation} data={formNavigatorData} width={parseInt(80)}/>

        <Text
          style={{
            color: "#098D73",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Delivery Fee to Boys
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TextInput
          keyboardType={"number-pad"}
          style={{
           flex:2,
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
          placeholder={"Minimum Weight"}
        />
        <TextInput
          keyboardType={"number-pad"}
          style={{
            flex:2,
            marginHorizontal:10,
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
          placeholder={"Charges"}
        />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TextInput
          keyboardType={"number-pad"}
          style={{
           flex:2,
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
          placeholder={"Minimum Distance"}
        />
        <TextInput
          keyboardType={"number-pad"}
          style={{
            flex:2,
            marginHorizontal:10,
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
          placeholder={"Charges"}
        />
        </View>
        <TextInput
          keyboardType={"number-pad"}
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
          placeholder={"Above Minimum Weight/KG Charges"}
        />
        
        <TextInput
          keyboardType={"number-pad"}
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
          placeholder={"Above Minimum Distance/KM Charges"}
        />

        <TextInput
          keyboardType={"number-pad"}
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
          placeholder={"Maximum Weight"}
        />
        <View style={styles.inputContainer}>
        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#098D73', false: 'gray' }}
          />
          <Text style={{ color: "black" }}>We Accept Pay on Delivery  </Text>
         
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("agencytab");
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
