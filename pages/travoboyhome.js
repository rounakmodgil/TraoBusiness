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
import Shop from "../asserts/shop.png";
import RunningOrder from "../components/runningOrder";
import Delivery from "../asserts/delivery.png";
import Deliveryone from "../asserts/delivery1.png";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
const windowHeight = Dimensions.get("window").height;

export default function TravoBoyHome({ navigation }) {
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
              TRAO BOY
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
          <Pressable
            onPress={() => {
              navigation.navigate("unassignedOrder");
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
                  3 Unassigned
                </Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>
                  Orders Waiting For You
                </Text>
              </View>
              {isEnabled && <Image
                source={Delivery}
                style={{ height: 80, width: 80, resizeMode: "contain" }}
              />}
              {!isEnabled &&
              
               <Image
                source={Deliveryone}
                style={{ height: 80, width: 80, resizeMode: "contain" }}
              />
              }
            </View>
          </Pressable>
          <View style={{ marginTop: 40 }}>
            <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
              {" "}
              Running Orders
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("pickupmap");
              }}
            >
              <RunningOrder isEnabled={isEnabled}/>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("dropmap");
              }}
            >
              <RunningOrder isEnabled={isEnabled}/>
            </Pressable>

            <RunningOrder isEnabled={isEnabled}/>
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
    overflow: "hidden",
  },
});
