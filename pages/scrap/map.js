import React, { useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
  Pressable
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import GetLocation from "react-native-get-location";

export default function Map({ navigation }) {
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
    <View style={styles.mapMainContainer}>
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
     
      <Pressable onPress={() => {navigation.navigate("addboys4")}}>
            <View style={styles.container3}>
              <Text style={styles.text2}>Proceed</Text>
            </View>
          </Pressable>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  mapMainContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  map: {
    height: "85%",
  },
  addressInputBox: {
    backgroundColor: "gray",
    width: "100%",
    marginBottom: 15,
  },
  saveLocationContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",

    marginVertical: 5,
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
  },
  maptext: {
    fontWeight: "bold",
    fontSize: 14,
  },
  maptext2: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 14,
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
