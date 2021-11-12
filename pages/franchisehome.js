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
import Delivery from "../asserts/delivery.png";
import DeliveryOne from "../asserts/delivery1.png";

const windowHeight = Dimensions.get("window").height;

export default function Travoagencyhome({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
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
              TRAO MART ADMIN
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
                  navigation.navigate("franchisenotification");
                }}
              >
                <MaIcon name="bell-outline" size={30} color="white" />
              </Pressable>
              <Pressable
              style={{marginLeft:10}}
                onPress={() => {
                  navigation.navigate("franchisecart");
                }}
              >
                <MaIcon name="cart-outline" size={30} color="white" />
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
          <Pressable
            onPress={() => {
              navigation.navigate("franchiseneworders");
            }}
          >
            <View
              style={{
                marginTop: 40,
                height: 150,
                backgroundColor: "#EEE",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#555",
                  }}
                >
                  10 New Orders
                </Text>
                <Text
                  style={{ fontSize: 16, marginTop: 5, textAlign: "center" }}
                >
                  Waiting For You
                </Text>
              </View>
              {isEnabled && (
                <Image
                  source={Delivery}
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                />
              )}
              {!isEnabled && (
                <Image
                  source={DeliveryOne}
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                />
              )}
            </View>
          </Pressable>
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
                  navigation.navigate("franchisesetup");
                }}
              >
                {isEnabled && (
                  <Tile text1="Setup" image={"cogs"} color={"#1AB394"} />
                )}
                {!isEnabled && (
                  <Tile text1="Setup" image={"cogs"} color={"gray"} />
                )}
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("franchisetraocard");
                }}
              >
                {isEnabled && (
                  <Tile
                    text1="Trao"
                    text2="Cards"
                    image={"credit-card-settings"}
                    color={"#1AB394"}
                  />
                )}
                {!isEnabled && (
                  <Tile
                    text1="Trao"
                    text2="Cards"
                    image={"credit-card-settings"}
                    color={"gray"}
                  />
                )}
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("franchiseitems");
                }}
              >
                  {isEnabled && (
                  <Tile text1="Items" image={"purse"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                  <Tile text1="Items" image={"purse"}  color={"gray"} />
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
                  navigation.navigate("stock");
                }}
              >
                  {isEnabled && (
                  <Tile text1="Stock" image={"account"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                 <Tile text1="Stock" image={"account"}  color={"gray"} />
                )}
                
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("franchiseofflinesales");
                }}
              >
                 {isEnabled && (
                  <Tile text1="Offline" text2="Sales" image={"purse"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                 <Tile text1="Offline" text2="Sales" image={"purse"} color={"gray"} />
                )}
                
                
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("franchiseonlineorders");
                }}
              >
                {isEnabled && (
                  <Tile text1="Online" text2="Orders" image={"wallet"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                <Tile text1="Online" text2="Orders" image={"wallet"} color={"gray"} />
                )}
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 30,
                marginBottom: 30,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("franchiseonlineorders");
                }}
              >
                 {isEnabled && (
                 <Tile text1="Returned" text2="Products" image={"account"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                <Tile text1="Returned" text2="Products" image={"account"} color={"gray"} />
                )}
                
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("franchisereturnentry");
                }}
              >
                 {isEnabled && (
                  <Tile text1="Return" text2="Entry" image={"purse"} color={"#1AB394"} />
                )}
                {!isEnabled && (
                 <Tile text1="Return" text2="Entry" image={"purse"}color={"gray"} />
                )}
                
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
