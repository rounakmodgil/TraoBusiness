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
import FormNavigator from "../components/formnavigator";
const windowHeight = Dimensions.get("window").height;
const formNavigatorData=[
  {
    label:'Store Details',
    navigate:'franchisesetup',
    status:true
  },
  {
    label:'KYC',
    navigate:'franchisesetup2',
    status:true
  },
  {
    label:'Address',
    navigate:'franchisesetup3',
    status:false
  },
  {
    label:'Location',
    navigate:'franchisemap',
    status:false
  }
]
export default function FranchiseSetup2({ navigation }) {
  const [status, setStatus] = useState(-1);
  const [regimage, regsetImage] = useState(null);
  const [gstimage, gstsetImage] = useState(null);
  const [panimage, pansetImage] = useState(null);
  const [shopimage, shopsetImage] = useState(null);
  const regref = useRef();
  const gstref = useRef();
  const panref = useRef();
  const shopref = useRef();

  const reguploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      regsetImage(image);
      regref.current.close();
    });
  };
  const reguploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      regsetImage(image);
      regref.current.close();
    });
  };
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
  const gstuploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      gstsetImage(image);
      gstref.current.close();
    });
  };
  const gstuploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      gstsetImage(image);
      gstref.current.close();
    });
  };
  const panuploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      pansetImage(image);
      panref.current.close();
    });
  };
  const panuploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      pansetImage(image);
      panref.current.close();
    });
  };
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
      <FormNavigator navigation={navigation} data={formNavigatorData} width={parseInt(30)}/>
        <View>
          <Text
            style={{
              color: "#098D73",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Franchise Details
          </Text>
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
            placeholder={"Registration Number"}
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
            placeholder={"GST Number"}
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
            placeholder={"Pan Number"}
          />

          <View style={styles.inputContainer}>
            <Text style={{ color: "black", fontWeight: "300" }}>
              Reg Doc :{" "}
            </Text>
            <TouchableNativeFeedback onPress={() => regref.current.open()}>
              <View style={styles.uploadphoto}>
                {regimage != null && (
                  <FaIcon name={"check-circle"} color={"green"} size={18} />
                )}
                {regimage === null && (
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

          <View style={styles.inputContainer}>
            <Text style={{ color: "black", fontWeight: "300" }}>
              GST Doc :{" "}
            </Text>
            <TouchableNativeFeedback onPress={() => gstref.current.open()}>
              <View style={styles.uploadphoto}>
                {gstimage != null && (
                  <FaIcon name={"check-circle"} color={"green"} size={18} />
                )}
                {gstimage === null && (
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

          <View style={styles.inputContainer}>
            <Text style={{ color: "black", fontWeight: "300" }}>
              Pan Doc :{" "}
            </Text>
            <TouchableNativeFeedback onPress={() => panref.current.open()}>
              <View style={styles.uploadphoto}>
                {panimage != null && (
                  <FaIcon name={"check-circle"} color={"green"} size={18} />
                )}
                {panimage === null && (
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
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("franchisesetup3");
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Proceed</Text>
          </View>
        </Pressable>
        <RBSheet
          ref={regref}
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
            <TouchableWithoutFeedback onPress={reguploadfromlib}>
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
            <TouchableNativeFeedback onPress={reguploadfromcamera}>
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
        <RBSheet
          ref={gstref}
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
            <TouchableWithoutFeedback onPress={gstuploadfromlib}>
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
            <TouchableNativeFeedback onPress={gstuploadfromcamera}>
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
        <RBSheet
          ref={panref}
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
            <TouchableWithoutFeedback onPress={panuploadfromlib}>
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
            <TouchableNativeFeedback onPress={panuploadfromcamera}>
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
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
