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
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Box from "../asserts/bg.png";

const windowHeight = Dimensions.get("window").height;
const list = [
  {
    title: "User Verification",
    name: "certificate",
  },
  {
    title: "Settings",
    name: "cog",
    nav: "boysettings",
  },
  {
    title: "BankDetails",
    name: "money-bill",
    nav:"Add Bank Account"
  },
  {
    title: "Pricing List",
    name: "tag",
  },
  {
    title: "Terms and Condition",
    name: "list-alt",
  },
  {
    title: "Help and Support",
    name: "question-circle",
  },
  {
    title: "Rate us",
    name: "star",
  },
  {
    title: "About",
    name: "info-circle",
  },
  {
    title: "Logout",
    name: "sign-out-alt",
  },
];
export default function TravoBoyProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEE",
            height: 220,
          }}
        >
          <Image
            source={Box}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          />
          <Text style={{ color: "green", opacity: 0.5, marginTop: 3 }}>
            KYC Verified
          </Text>
          <Text
            style={{
              color: "#555",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            Jagruth H.
          </Text>
          <Text
            style={{
              color: "#555",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            +918686869597
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {list.map((l) => (
            <Pressable
              style={{ flex: 1 }}
              onPress={() => {
                navigation.navigate(l.nav);
              }}
            >
              <View
                style={{
                  height: 60,
                  borderBottomWidth: 1,
                  borderBottomColor: "#EEE",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome5Icon name={l.name} size={12} color={"gray"} />
                <Text style={{ marginLeft: 10 }}>{l.title}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
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
