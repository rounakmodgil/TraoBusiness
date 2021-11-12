import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome5";

import { DataTable } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";

const FranchiseOnlineOrders2 = ({ navigation }) => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{}}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>OrderId: 7834hjsa</Text>
            <Text> Items: 12 Items</Text>
            <Text>Date & Time: 07-07-2021, 9:30 PM</Text>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Items</DataTable.Title>
              <DataTable.Title numeric>Packed</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Wheat Flour</DataTable.Cell>
              <DataTable.Cell numeric>

                <CheckBox tintColors={{ true: "#098D73", false: "black" }} />
              </DataTable.Cell>
              
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Soya Bean</DataTable.Cell>
              <DataTable.Cell numeric>
                <CheckBox tintColors={{ true: "#098D73", false: "black" }} />
              </DataTable.Cell>
              
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Tuar Dal</DataTable.Cell>
              <DataTable.Cell numeric>
                <CheckBox tintColors={{ true: "#098D73", false: "black" }} />
              </DataTable.Cell>
             
            </DataTable.Row>
          </DataTable>
        </View>
        <Pressable onPress={() => {}}>
          <View style={styles.container3}>
            <Text style={styles.text2}>Update</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
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
});

export default FranchiseOnlineOrders2;
