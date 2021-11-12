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
} from "react-native";

import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import FormNavigator from "../components/formnavigator";
const windowHeight = Dimensions.get("window").height;
const formNavigatorData=[
  {
    label:'Verify Phone',
    navigate:'addboysverify',
    status:true
  },
  {
    label:'Personal',
    navigate:'addboys',
    status:true
  },
  {
    label:'KYC',
    navigate:'addboys2',
    status:true
  },
  {
    label:'Address',
    navigate:'addboys3',
    status:false
  }
]
export default function AddBoys2({navigation}) {
  const [status, setStatus] = useState(-1);
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
      <FormNavigator navigation={navigation} data={formNavigatorData} width={parseInt(60)}/>
        <Text
          style={{
            color: "#098D73",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          Upload Documents
        </Text>
        <View>
          <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 25,
              marginBottom: 25,
              color: "#000",
              borderBottomColor: status === 1 ? "#0E7783" : "gray",
            }}
            onFocus={() => {
              setStatus(1);
            }}
            onBlur={() => {
              setStatus(-1);
            }}
            placeholderTextColor="#555"
            placeholder={"ID Proof No"}
          />
          
          <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: 25,
              marginBottom: 25,
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
            placeholder={"Pan No"}
          />
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>ID Proof Doc : </Text>
            <TouchableNativeFeedback onPress={() => idref.current.open()}>
              <View style={styles.uploadphoto}>
                {idimage != null && (
                  <FaIcon name={"check-circle"} color={"green"} size={18} />
                )}
                {idimage === null && (
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
            <Text style={{ color: "black" }}>Pan Doc : </Text>
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

        <Pressable onPress={() => {navigation.navigate("addboys3")}}>
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
    marginBottom: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  
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
