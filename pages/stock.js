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

import StockItem from "../components/stockitem";
import FaIcon from "react-native-vector-icons/FontAwesome5";

const Stock = () => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            marginTop:5,
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#AAA",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item "
            placeholderTextColor={"gray"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
        <View>
          <StockItem />
          <StockItem />
          <StockItem />
          <StockItem />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
});

export default Stock;