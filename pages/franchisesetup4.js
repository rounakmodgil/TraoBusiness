import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
export default function Franchisesetup4({ navigation }) {
  const [status, setStatus] = useState(-1);
  const [isSelected, setSelection] = useState(false);
  const [idimage, idsetImage] = useState(null);
  const [photoimage, photosetImage] = useState(null);
  const [panimage, pansetImage] = useState(null);
  const photoref = useRef();
  const idref = useRef();
  const panref = useRef();
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
  const iduploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      idsetImage(image);
      idref.current.close();
    });
  };
  const iduploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      idsetImage(image);
      idref.current.close();
    });
  };
  const photouploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      photosetImage(image);
      photoref.current.close();
    });
  };
  const photouploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      photosetImage(image);
      photoref.current.close();
    });
  };
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <Text
          style={{
            color: "#098D73",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Franchise Setup
        </Text>

        <View style={styles.inputContainer} style={{ backgroundColor: "#fff" }}>
          <TouchableNativeFeedback onPress={() => photoref.current.open()}>
            <View style={styles.uploadphoto}>
              {photoimage != null && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: photoimage.path }}
                    style={{
                      resizeMode: "cover",
                      width: windowWidth - 20,
                      height: windowHeight / 2,
                    }}
                  ></Image>
                </View>
              )}
              {photoimage === null && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../asserts/user.png")}
                    style={{
                      resizeMode: "cover",
                      width: windowWidth - 20,
                      height: windowHeight / 2,
                    }}
                  ></Image>
                </View>
              )}
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.inputContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: "#098D73", false: "gray" }}
          />
          <Text style={{ color: "black" }}>We Accept Pay on Delivery </Text>
        </View>
        {isSelected && (
          <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 5,
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
            placeholder={"Minimum Order For Free Delivery Number"}
          />
        )}
        <Pressable
          onPress={() => {
            navigation.navigate("franchisetab");
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Proceed</Text>
          </View>
        </Pressable>

        <RBSheet
          ref={photoref}
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
            <TouchableWithoutFeedback onPress={photouploadfromlib}>
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
            <TouchableNativeFeedback onPress={photouploadfromcamera}>
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
        <RBSheet
          ref={idref}
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
            <TouchableWithoutFeedback onPress={iduploadfromlib}>
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
            <TouchableNativeFeedback onPress={iduploadfromcamera}>
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
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",

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
    marginTop: 80,
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
