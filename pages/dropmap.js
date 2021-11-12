import { Formik } from "formik";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import GetLocation from "react-native-get-location";
import { ScrollView } from "react-native-gesture-handler";
import { Linking } from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function Pickupmap({ navigation }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [otp, setOtp] = useState("");
  function currentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 10000,
    })
      .then((location) => {
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }
  if (latitude === 0 || longitude === 0) {
    currentLocation();
  }

  return (
    <ScrollView>
      <View style={styles.mapMainContainer}>
        <View
          style={{
            height: 50,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#999",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "60%", flex: 1 }}>
            <TextInput
              placeholder="Enter Drop Otp"
              style={{ textAlign: "center" }}
              keyboardType={"number-pad"}
            />
          </View>
          <View
            style={{
              width: "40%",
              backgroundColor: "#098D73",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: 50,
            }}
          >
            <Pressable onPress={()=>{navigation.navigate("boydelivered")}} style={{flex:1}}>

            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                alignItems: "center",
              }}
              >
              Validate
            </Text>
              </Pressable>
          </View>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            draggable
            coordinate={{ latitude: latitude, longitude: longitude }}
            onDragEnd={(e) => {
              console.log("deng" + e);
              setLatitude(e.nativeEvent.coordinate.latitude);
              setLongitude(e.nativeEvent.coordinate.longitude);
            }}
          ></Marker>
        </MapView>
        <View style={styles.saveLocationContainer}>
          
          <View style={{marginRight:30}}>
            <Text style={styles.maptext}>PIC0007</Text>
            <Text style={styles.maptext}>Rs. 200</Text>
            <Text style={styles.maptext2}>2-22-106/77, Vijay Nagar Colony, KPHB, Hyderabad</Text>
          </View>
          
       
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${8686959744}`);
          }}
        >
          <View
            style={{
              backgroundColor: "#098D73",
              marginLeft: 10,
              marginRight: 10,
              height:40,
              width:40,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius:20
            }}
          >
            <Image
              style={{ height: 15, width: 15, marginRight: 5 }}
              source={require("../asserts/phone.png")}
            />
           
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mapMainContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  map: {
    height: windowHeight * 0.7,
  },
  addressInputBox: {
    backgroundColor: "gray",
    width: "100%",
    marginBottom: 15,
  },
  saveLocationContainer: {
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"flex-end",
    height: windowHeight *0.2,
    width:"100%"
  },
  saveLocationButton: {
    height: 50,
    width: 180,
    backgroundColor: "#ffcf08",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  saveLocationText: {
    color: "#fff",
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
    marginVertical:3
  },
  maptext: {
    fontWeight: "bold",
    fontSize: 14,
    marginVertical:3
  },
  maptext2: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 12,
    maxWidth:300,
    marginVertical:3
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: "#fff",
    minWidth: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
