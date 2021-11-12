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
import {Linking} from 'react-native'
export default function ManageBoysComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        padding: 15,
        paddingVertical: 25,
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 8,
        flex: 1,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ height: 40, width: 45, marginBottom: 20 }}
          source={require("../asserts/delivery.png")}
        />
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginBottom: 5 }}
        >
          Rajnish Reddy
        </Text>
        <Text style={{ textAlign: "center", color: "grey" }}>
          ID: 12355fjh86b
        </Text>
        <Text style={{ textAlign: "center", color: "grey" }}>KYC Verified</Text>
      </View>
      <View style={{ justifyContent: "space-between", width:120 }}>
        <Picker style={styles.pickerStyle}>
          <Picker.Item label="Vehicle" value="java" />
          <Picker.Item label="Pulsar" value="js" />
          <Picker.Item label="Activa" value="rn" />
        </Picker>
        <View
          style={{
            flexDirection: "row",
            justifyContent:'space-evenly'
          }}
        >
          {isEnabled && (
            <FontAwesome5Icon
              name="pencil-alt"
              size={15}
              style={{ marginRight: 60 }}
              color={"#1AB394"}
            />
          )}
          {!isEnabled && (
            <FontAwesome5Icon
              name="pencil-alt"
              size={15}
              style={{ marginRight: 60 }}
              color={"gray"}
            />
          )}
          {isEnabled && (
            <FontAwesome5Icon
              name="cut"
              size={15}
              style={{ marginLeft: 10 }}
              color={"#1AB394"}
            />
          )}
          {!isEnabled && (
            <FontAwesome5Icon
              name="cut"
              size={15}
              style={{ marginLeft: 10 }}
              color={"gray"}
            />
          )}
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <Switch
          style={{
            transform: [{ scaleX: 0.7 }, { scaleY: 0.5 }],
            marginTop: 10,
          }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#1AB394" : "#eee"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Pressable onPress={()=>{Linking.openURL(`tel:${9999999999}`)}}>
        {isEnabled && (
          <FontAwesome5Icon
            name="phone"
            size={15}
            style={{ marginLeft: 10 }}
            color={"#1AB394"}
          />
        )}
        {!isEnabled && (
          <FontAwesome5Icon
            name="phone"
            size={15}
            style={{ marginLeft: 10 }}
            color={"gray"}
          />
        )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    color: "#344953",
    justifyContent: "center",
  },
});
