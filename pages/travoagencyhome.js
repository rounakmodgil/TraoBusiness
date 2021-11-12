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
} from "react-native";
import Tile from "../components/tile";
import Box from "../asserts/box.png";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";

const windowHeight = Dimensions.get("window").height;

export default function Travoagencyhome({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.page5container}>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#1AB394",
            height: 200,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginTop: 20,
              textAlign: "center",
            }}
          >
            TRAO AGENCY
          </Text>
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              marginTop: -30,
              marginRight: 10,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("notification");
              }}
            >
              <MaIcon name="bell" size={30} color="white" />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#EEE",
            borderRadius: 10,
            width: "90%",
            height: 200,
            marginTop: -100,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Box}
                style={{ height: 50, width: 50, borderRadius: 25 }}
              />
              <Text> Karthik Gandhi</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 30,
              marginTop: 40,
            }}
          >
            <View>
              <Text>Total Orders</Text>
              <Text style={{ textAlign: "center" }}>767s</Text>
            </View>
            <View>
              <Text>Completed</Text>
              <Text style={{ textAlign: "center" }}>767s</Text>
            </View>
            <View>
              <Text>Earned</Text>
              <Text style={{ textAlign: "center" }}>12000</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("addboysverify");
              }}
            >
              {isEnabled && (
                <Tile
                  text1="Add"
                  text2="Boys"
                  image={"account"}
                  color={"#1AB394"}
                />
              )}
              {!isEnabled && (
                <Tile
                  text1="Add"
                  text2="Boys"
                  image={"account"}
                  color={"gray"}
                />
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("addvehicle");
              }}
            >
              {isEnabled && (
                <Tile
                  text1="Add"
                  text2="Vehicles"
                  image={"motorbike"}
                  color={"#1AB394"}
                />
              )}
              {!isEnabled && (
                <Tile
                  text1="Add"
                  text2="Vehicles"
                  image={"motorbike"}
                  color={"gray"}
                />
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("setup");
              }}
            >
              {isEnabled && (
                <Tile text1="Setup" image={"cogs"} color={"#1AB394"} />
              )}
              {!isEnabled && (
                <Tile text1="Setup" image={"cogs"} color={"gray"} />
              )}
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("manageboys");
              }}
            >
              {isEnabled && (
                <Tile
                  text1="Manage"
                  text2="Boys"
                  image={"account"}
                  color={"#1AB394"}
                />
              )}
              {!isEnabled && (
                <Tile
                  text1="Manage"
                  text2="Boys"
                  image={"account"}
                  color={"gray"}
                />
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("travoagencyorder");
              }}
            >
              {isEnabled && (
                <Tile text1="Orders" image={"purse"} color={"#1AB394"} />
              )}
              {!isEnabled && (
                <Tile text1="Orders" image={"purse"} color={"gray"} />
              )}
            </Pressable>
            <Pressable onPress={() => {navigation.navigate("incometransaction")}}>
              {isEnabled && (
                <Tile text1="Wallet" image={"wallet"} color={"#1AB394"} />
              )}
              {!isEnabled && (
                <Tile text1="Wallet" image={"wallet"} color={"gray"} />
              )}
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("addshop");
            }}
          >
            <View
              style={{
                backgroundColor: isEnabled ? "#098D73" : "gray",
                marginTop: 30,
                borderRadius: 10,
                height: 40,
                width: "90%",
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "#fff" }}> Add Shop</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});
