import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Picker,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";
import 'react-native-get-random-values'
import { v4 as uuidv4 } from "uuid";


export default function AddItem({ navigation }) {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(-1);
  const [subCat, setSubCat] = useState("");
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [panimage, pansetImage] = useState(null);
  const [batch, setBatch]=useState([{
    id: uuidv4(),
    weight:"",
    units:"",
    price:"",
    stock:""
  }])
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
  const handleAddBatch = () => {
    setBatch([
      ...batch,
      {
        id: uuidv4(),
        weight:"",
        units:"",
        price:"",
        stock:""
      }
    ]);
  };
  const handlebatchupdate = (id, event) => {
    const newCourseDetailsFields = courseDetails.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCourseDetails(newCourseDetailsFields);
  };
  const handleRemoveBatch = (id, event) => {
    const res=[...batch];
    res.splice(-1);
    setBatch(res);

  }
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              height: 40,
              marginVertical: 20,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={{ flex: 1, color: "#555" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Select Category" value="Select Category" />
              <Picker.Item label="Cat1" value="cat1" />
            </Picker>
          </View>
          <View
            style={{
              height: 40,
              marginVertical: 20,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={{ flex: 1, color: "#555" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item
                label="Select Sub Category"
                value="Select Category"
              />
              <Picker.Item label="Cat1" value="cat1" />
            </Picker>
          </View>

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
            placeholder={"ID"}
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
            placeholder={"Brand"}
          />
          <View style={{ backgroundColor: "#eee", paddingBottom: 20, marginVertical:10 }}>
            {batch.map((b)=>(<View >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TextInput
                keyboardType={"number-pad"}
                style={{
                  flex: 2,
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
                placeholder={"Weight"}
                value={b.weight}
              />
              <Picker
                selectedValue={b.units}
                style={{
                  flex: 2,
                  color: "#555",
                  marginTop: 20,
                  marginBottom: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: status === 2 ? "#0E7783" : "gray",
                }}
                name="units"
                onValueChange={(itemValue) =>
                handlebatchupdate(b.id, itemValue)
                }
              >
                <Picker.Item label="KG" value="KG" />
                <Picker.Item label="Grams" value="Grams" />
              </Picker>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
             
              <TextInput
                keyboardType={"number-pad"}
                style={{
                  flex: 2,
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
                placeholder={"Price"}
                value={b.price}
              />
              <TextInput
                keyboardType={"number-pad"}
                style={{
                  flex: 2,
                  marginHorizontal: 10,
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
                placeholder={"Stock"}
                value={b.stock}
              />
            </View>
         </View>))}
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginHorizontal:10 }}>
              {batch.length>1 &&
            <Pressable onPress={()=>{handleRemoveBatch()}}  >
              <View style={{height:20, width:20, borderRadius:10, backgroundColor:"#098D73" , justifyContent:'center', alignItems:'center', marginHorizontal:5}}>
              <Text style={{color:"#fff"}}>-</Text>
              </View>
            </Pressable>
}
            <Pressable onPress={()=>{handleAddBatch()}}>
              <View style={{height:20, width:20, borderRadius:10, backgroundColor:"#098D73" , justifyContent:'center', alignItems:'center'}}>
              <Text style={{color:"#fff"}}>+</Text>
              </View>
            </Pressable>
            
            </View>
          </View>
          <TextInput
            keyboardType={"number-pad"}
            style={{
              flex: 2,
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
            placeholder={"Discount in %"}
          />

          <TextInput
            keyboardType={"number-pad"}
            style={{
              flex: 2,
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
            placeholder={"Tax in %"}
          />
          <TextInput
            style={{
              flex: 2,
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
            placeholder={"Description"}
          />
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Item Image : </Text>
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

        <TouchableOpacity
          onPress={() => {
            {
              navigation.navigate("sellertab");
            }
          }}
        >
          <View style={styles.container3}>
            <Text style={styles.text2}>Add Item</Text>
          </View>
        </TouchableOpacity>

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
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingHorizontal: 10,
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
