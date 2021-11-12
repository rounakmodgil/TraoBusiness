import React from 'react';
import {
View, Text, StyleSheet,ScrollView
} from 'react-native';


import OrderItem from "../components/orderitem";

const Orders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontWeight:"bold"}}>Your Orders</Text>
      
      <View>
        <OrderItem pack={1} navigation={navigation} />
        <OrderItem pack={0} navigation={navigation} />
        <OrderItem pack={0} navigation={navigation} />

      </View>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:30
  }

});

export default Orders;
