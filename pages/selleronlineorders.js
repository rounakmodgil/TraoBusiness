import React, {useState} from 'react';
import {
View, StyleSheet,ScrollView,
TextInput
} from 'react-native';
import SellerOnlineOrderItem from '../components/selleronlineorderitem';
import FaIcon from "react-native-vector-icons/FontAwesome5";


const SellerOnlineOrders = ({navigation}) => {
    const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            marginTop:5,
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#AAA",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item "
            placeholderTextColor={"gray"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
      
      <View>
        <SellerOnlineOrderItem pack={1} navigation={navigation} />
        <SellerOnlineOrderItem pack={0} navigation={navigation} />
        <SellerOnlineOrderItem pack={0} navigation={navigation} />

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

export default SellerOnlineOrders;
