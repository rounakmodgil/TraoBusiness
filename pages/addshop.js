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
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import { RadioButton } from "react-native-paper";

const windowHeight = Dimensions.get("window").height;

export default function AddShop() {
  const shopref = useRef();
  const [shopimage, shopsetImage] = useState(null);
  const [status, setStatus] = useState(-1);
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [landPhone, setLandPhone] = useState("");
  const [email, setEmail] = useState("");
  const [shopSize, setShopSize] = useState("");
  const [regNo, setRegNo] = useState("");
  const [regDoc, setRegDoc] = useState("");
  const [gstNo, setGst] = useState("");
  const [gstDoc, setGstDoc] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAdress] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [house, setHouse] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [checked, setChecked] = React.useState("first");
  const shopuploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      shopsetImage(image);
      shopref.current.close();
    });
  };
  const shopuploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      shopsetImage(image);
      shopref.current.close();
    });
  };
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View>
          <Text
            style={{
              color: "#098D73",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            My Business
          </Text>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text style={{ paddingLeft: 10 }}>Trao Mart Franchise</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",   }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text style={{ paddingLeft: 10 }}>Own Shop</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center",   }}>
              <RadioButton
                value="three"
                status={checked === "three" ? "checked" : "unchecked"}
                onPress={() => setChecked("three")}
              />
              <Text style={{ paddingLeft: 10 }}>Office</Text>
            </View>
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
            placeholder={"Shop Name"}
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
            placeholder={"Phone"}
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
            placeholder={"Email ID"}
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
            placeholder={"Shop Number"}
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
            placeholder={"House Number"}
          />

          <TextInput
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
            placeholder={"Street"}
          />
          <TextInput
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
            placeholder={"City"}
          />
          <TextInput
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
            placeholder={"State"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Shop Photos : </Text>
          <TouchableNativeFeedback onPress={() => shopref.current.open()}>
            <View style={styles.uploadphoto}>
              {shopimage != null && (
                <FaIcon name={"check-circle"} color={"green"} size={18} />
              )}
              {shopimage === null && (
                <View
                  style={{
                    alignItems: "center",
                    height: 30,
                    width: 80,
                    backgroundColor: "gray",
                    justifyContent: "center",
                    borderRadius: 7,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 10, color: "#fff" }}>
                      Upload Image
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </TouchableNativeFeedback>
        </View>
        <TouchableOpacity
          onPress={() => {
            {
              Varloginscreen(false);
              Vartabscreen(true);
            }
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Update</Text>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={shopref}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View>
            <TouchableWithoutFeedback onPress={shopuploadfromlib}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <MaIcon name={"folder-image"} size={25} color="gray" />
                <Text style={styles.popuptext}> Upload from Gallery</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={shopuploadfromcamera}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <MaIcon name={"camera"} size={25} color="gray" />
                <Text style={styles.popuptext}> Take a photo</Text>
              </View>
            </TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
              }}
            >
              <MaIcon name={"logout"} size={25} color="gray" />
              <Text style={styles.popuptext}> Cancel</Text>
            </View>
          </View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
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
});
