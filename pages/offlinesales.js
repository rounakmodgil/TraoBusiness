import React, { useState } from "react";
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
  Modal,
  CheckBox,
  Picker,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const windowHeight = Dimensions.get("window").height;

export default function OfflineSales() {
  const [status, setStatus] = useState(-1);
  const [userId, setUserId] = useState("");
  const [card, setCard] = useState("");
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  let data = [
    { value: "Kg" },
    { value: "Grms" },
    { value: "MG" },
    { value: "ML" },
    { value: "LTR" },
  ];

  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.inputContainer2}>
            <Text style={{ color: "black" }}>UserID or Phone Validate </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.input2}
                onChangeText={(val) => setUserId(val)}
                value={userId}
              ></TextInput>
              <TouchableOpacity>
                <FontAwesome5Icon name="thumbs-up" size={20} color={"#1AB394"} style={{paddingLeft:10}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer2}>
            <Text style={{ color: "black" }}>Trao Card Validate </Text>
            <View style={{ flexDirection: "row", alignItems:"center" }}>
              <TextInput
                style={styles.input2}
                onChangeText={(val) => setUserId(val)}
                value={userId}
              ></TextInput>
              <TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome5Icon name="thumbs-up" size={20}  color={"#1AB394"} style={{paddingLeft:10}}/>
                </TouchableOpacity>
              </TouchableOpacity>
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
            placeholder={"Item ID"}
          />
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
            />
            <Picker
              selectedValue={selectedValue}
              style={{
                flex: 2,
                color: "#555",
                marginTop: 20,
                marginBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: status === 2 ? "#0E7783" : "gray",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="KG" value="KG" />
              <Picker.Item label="Grams" value="Grams" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 15, marginHorizontal: 10 }}>
          <Text style={styles.text}>Name :</Text>
          <Text style={styles.text}>Your Price :</Text>
          <Text style={styles.text}>Selling Price :</Text>
          <Text style={styles.text}>Card Discount :</Text>
          <Text style={styles.text}>Stock :</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              {
                Varloginscreen(false);
                Vartabscreen(true);
              }
            }}
          >
            <View style={styles.container3}>
              <Text style={styles.text2}>Add to sale</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 10,
          }}
        >
          Items added to sale
        </Text>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 25,
          }}
        >
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>ID</Text>
            <Text style={styles.text}>TCsf</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Name</Text>
            <Text style={styles.text}>Toordal</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Weight</Text>
            <Text style={styles.text}>1kg</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Qty</Text>
            <Text style={styles.text}>10</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Price</Text>
            <Text style={styles.text}>500.00</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}></Text>
            <TouchableOpacity>
              <Text style={styles.text3}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopColor: "black",
          borderTopWidth: 0.5,
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: "#098D73",
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.textCart}>Total Items: 10</Text>
          <Text style={styles.textCart}>Total Price : 700.00</Text>
          <Text style={styles.textCart}>Dis% : 100.00</Text>
        </View>
        <View style={{ paddingRight: 10, justifyContent: "center" }}>
          <Text style={{ color: "white", padding: 5, paddingBottom: 10 }}>
            Collect
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("franchiseofflinesales2")}}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2Cart}>600.00</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer2: {
    marginBottom: 10,
    marginTop: 25,
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
  input2: {
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
  text: {
    color: "black",
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  texthead: {
    maxWidth: 60,
    minWidth: 50,
  },
  text: {
    paddingTop: 20,
  },
  textHeading: {
    maxHeight: 50,
    minHeight: 50,
    fontWeight: "bold",
  },
  text3: {
    marginTop: 20,
    padding: 5,
    backgroundColor: "#098D73",
    fontSize: 12,
    justifyContent: "center",
    borderRadius: 5,
    color: "white",
  },
  container2: {
    flex: 1,
    alignItems: "center",
  },
  textHeadCart: {
    paddingBottom: 10,
    paddingTop: 5,
    color: "white",
    fontSize: 16,
  },
  textCart: {
    paddingBottom: 2,
    paddingTop: 2,
    color: "white",
    fontSize: 12,
  },
  text2Cart: {
    color: "#23973F",
  },
});