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
} from "react-native";
const windowHeight = Dimensions.get("window").height;
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Travoagencyorder() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <SafeAreaView style={styles.page5container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 25,

        }}
      >
        <View>
          <Text style={styles.orderheader}>OrderID</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.text}>TCsf</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.orderheader}>Boy ID</Text>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <Text style={styles.text}>TCsf</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.orderheader}>From-TO</Text>
          <Text style={styles.text}>KPHB-MPR</Text>
        </View>
        <View>
          <Text style={styles.orderheader}>Status</Text>
          <Text style={styles.text}>Pending</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <Text style={styles.orderheader}>Navigation</Text>
          <MaIcon style={{marginTop:10}} name="navigation" size={25} color="green" />
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

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalVisible2}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>BoyID: TORD986</Text>

            <Text style={styles.modalText}>Boy Name : name</Text>
            <Text style={styles.modalText}>Total deliveries : 10</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
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
    orderheader:{
        fontWeight:"bold",
        fontSize:14
    },
  page5container: {
    flexDirection: "column",
    flex: 1,
   backgroundColor:"#fff",
    overflow: "hidden",

  },
  text: {
    paddingTop: 15,
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
    backgroundColor: "#ff0f0f",
  },
});