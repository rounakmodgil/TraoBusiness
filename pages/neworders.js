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

} from "react-native";
import CheckBox from "@react-native-community/checkbox"
const windowHeight = Dimensions.get("window").height;

export default function NewOrders() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <SafeAreaView style={styles.page5container}>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>OrderID</Text>
          <Text>TCsf</Text>
        </View>
        <View>
          <Text>CustomerID</Text>
          <Text>ThjJJ</Text>
        </View>
        <View>
          <Text>T Boy ID</Text>
          <Text>HHH</Text>
        </View>
        <View>
          <Text>Date{"&"}Time</Text>
          <Text>12th June</Text>
        </View>
        <View>
          <Text></Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../asserts/arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OrderID: TORD986</Text>

            <Text style={styles.modalText}>Invoice : inv80978</Text>
            <Text style={styles.modalText}>Total items : 10</Text>
            <Text style={styles.modalText}>Dispatc at : date {"&"} time</Text>
            <Text style={styles.modalText}>ItemID: It9777</Text>
            <Text style={styles.modalText}>Item: Toordal</Text>
            <Text style={styles.modalText}>Quantity: 10</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.modalText}>Status:</Text>
              <CheckBox
                style={styles.checkbox}
                value={selected}
                onValueChange={setSelected}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    backgroundColor:"#fff"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#f0505c",
  },
  buttonClose: {
    backgroundColor: "#f0505c",
  },
  checkbox: {
    marginTop: -13,
    paddingTop: 0,
  },
});