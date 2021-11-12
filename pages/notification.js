import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import NotificationItem from "../components/notificationItems";


export default function Notification(){    return (
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          
          
          <NotificationItem />
          <NotificationItem />

        </View>
      </View>
    );
  }




const styles = StyleSheet.create({
  mainContainer: {
      flex:1,
    
    padding: 20,
    backgroundColor:"white"
  },
  headingContainer: {
    
    marginBottom: 40,
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
});