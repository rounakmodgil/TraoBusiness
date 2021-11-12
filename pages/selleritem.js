import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  TouchableOpacity,
  TextInput
} from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import SellerAddedItem from "../components/selleraddeditem";
const listing = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Cat 1",
  },
  {
    title: "Cat 2",
  },
  {
    title: "Cat 3",
  },
  {
    title: "Cat 4",
  },
  {
    title: "Cat 5",
  },
];
const listing3 = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Brand 1",
  },
  {
    title: "Brand 2",
  },
  {
    title: "Brand 3",
  },
  {
    title: "Brand 4",
  },
  {
    title: "Brand 5",
  },
];
const SellerItem = () => {
  const [query, setQuery] = useState("");
const [bool, setBool]=useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#bbb",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item or store"
            placeholderTextColor={"gray"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
        <SellerAddedItem/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  textHead: {
    paddingBottom: 10,
    paddingTop: 5,
    color: "white",
    fontSize: 16,
  },
  text: {
    paddingBottom: 2,
    paddingTop: 2,
    color: "white",
    fontSize: 12,
  },
  text2: {
    color: "#23973F",
  },
});

export default SellerItem;


