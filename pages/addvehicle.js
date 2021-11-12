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
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Picker,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RBSheet from "react-native-raw-bottom-sheet";
import { DataTable } from "react-native-paper";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
export default function AddVehicle() {
  const [status, setStatus] = useState(-1);
  const [selectedValue, setSelectedValue] = useState("Scooty");
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [path, setPath] = useState(null);
  const [path2, setPath2] = useState(null);
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  const uploadfromlib = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      setImage(image);
      setPath(image.path);
      refRBSheet.current.close();
    });
  };
  const uploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image);
      setPath(image.path);
      refRBSheet.current.close();
    });
  };
  const uploadfromlib2 = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      setImage2(image);
      setPath2(image.path);
      refRBSheet.current.close();
    });
  };
  const uploadfromcamera2 = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage2(image);
      setPath2(image.path);
      refRBSheet.current.close();
    });
  };
  return (
    <ScrollView style={styles.page5container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Vehicle Type </Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150, color: "gray", fontSize: 10 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Scooty" value="scooty" />
            <Picker.Item label="Bike" value="bike" />
          </Picker>
        </View>
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 15,
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
          placeholder={"Brand"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 15,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 3 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(3);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Regd No"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 15,
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
          placeholder={"Owner Name"}
        />

        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Regd Document : </Text>
          <TouchableNativeFeedback onPress={() => refRBSheet2.current.open()}>
            <View style={styles.uploadphoto}>
              {image2 != null && (
                <Image
                  source={{ uri: path2 }}
                  style={styles.backgroundimg2}
                ></Image>
              )}
              {image2 === null && (
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
          <Text style={{ color: "#838383" }}>Vehicle Photos : </Text>
          <TouchableNativeFeedback onPress={() => refRBSheet.current.open()}>
            <View style={styles.uploadphoto}>
              {image != null && (
                <Image
                  source={{ uri: path }}
                  style={styles.backgroundimg2}
                ></Image>
              )}
              {image === null && (
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
        <Pressable>
          <View style={styles.container3}>
            <Text style={styles.text2}>Upload</Text>
          </View>
        </Pressable>
      </View>
      <View style={{ paddingTop: 30 }}>
        <View
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "#E5E5E5",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>Vehicle List</Text>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Vehicle No.</DataTable.Title>
            <DataTable.Title numeric>Brand</DataTable.Title>
            <DataTable.Title numeric>Vehicle Type</DataTable.Title>
            <DataTable.Title numeric>More</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>TS 00 EN 0000</DataTable.Cell>
            <DataTable.Cell numeric>Honda</DataTable.Cell>
            <DataTable.Cell numeric>Scooty</DataTable.Cell>
            <DataTable.Cell numeric>
              {" "}
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5Icon name="pencil-alt" size={10} />
                <FontAwesome5Icon
                  name="trash-alt"
                  style={{ marginLeft: 5 }}
                  size={10}
                />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>TS 00 EN 0000</DataTable.Cell>
            <DataTable.Cell numeric>Honda</DataTable.Cell>
            <DataTable.Cell numeric>Scooty</DataTable.Cell>
            <DataTable.Cell numeric>
              {" "}
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5Icon name="pencil-alt" size={10} style={{marginRight:5}}/>
                <FontAwesome5Icon
                  name="trash-alt"
                  style={{ marginLeft: 5 }}
                  size={10}
                />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <RBSheet
        ref={refRBSheet}
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
          <TouchableWithoutFeedback onPress={uploadfromlib}>
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
          <TouchableNativeFeedback onPress={uploadfromcamera}>
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
            style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
          >
            <MaIcon name={"logout"} size={25} color="gray" />
            <Text style={styles.popuptext}> Cancel</Text>
          </View>
        </View>
      </RBSheet>
      <RBSheet
        ref={refRBSheet2}
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
          <TouchableWithoutFeedback onPress={uploadfromlib2}>
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
          <TouchableNativeFeedback onPress={uploadfromcamera2}>
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
            style={{ flexDirection: "row", padding: 10, alignItems: "center" }}
          >
            <MaIcon name={"logout"} size={25} color="gray" />
            <Text style={styles.popuptext}> Cancel</Text>
          </View>
        </View>
      </RBSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
  texthead: {
    maxWidth: 50,
    marginBottom: 20,
  },
  text: {
    paddingTop: 15,
    fontSize: 9,
    color: "#000",
  },
  textview: {
    paddingTop: 15,
    fontSize: 9,
    color: "#098D73",
  },
  textHeading: {
    maxHeight: 50,
    minHeight: 50,
    fontWeight: "bold",
    fontSize: 9,
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
  backgroundimg2: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: "contain",
    justifyContent: "center",
  },
});

{
  /* <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Vehicle</Text>
            <Text style={styles.text}>TCsf</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Brand</Text>
            <Text style={styles.text}>ThjJJ</Text>
          </View>

          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Owner</Text>
            <Text style={styles.text}>12th June</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Regd No</Text>
            <Text style={styles.text}>HHH</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Regd Doc</Text>

            <Text style={styles.textview}>view</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Vehicle Photos</Text>
            <Text style={styles.textview}>view</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>More</Text>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <FontAwesome5Icon name="pencil-alt" size={10} />
              <FontAwesome5Icon
                name="trash-alt"
                style={{ marginLeft: 5 }}
                size={10}
              />
            </View>
          </View>
        </View> */
}
