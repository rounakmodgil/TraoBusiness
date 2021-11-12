import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  TouchableOpacity,
  TextInput
} from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import SellerItem from "../components/selleritem";
const listing = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Cat 1",
  },
  {
    title: "Cat 2",
  },
  {
    title: "Cat 3",
  },
  {
    title: "Cat 4",
  },
  {
    title: "Cat 5",
  },
];
const listing3 = [
  {
    title: "All",
    bool:true
  },
  {
    title: "Brand 1",
  },
  {
    title: "Brand 2",
  },
  {
    title: "Brand 3",
  },
  {
    title: "Brand 4",
  },
  {
    title: "Brand 5",
  },
];
const Item = () => {
  const [query, setQuery] = useState("");
const [bool, setBool]=useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#bbb",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item or store"
            placeholderTextColor={"gray"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
      <View style={{marginTop:5, marginBottom:10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", height:40, justifyContent:"center", alignItems:'center' }}>
                  {listing.map((l) => (
                    <View
                      style={{
                        borderWidth:1,
                        borderColor:"#098D73",
                        backgroundColor:l.bool?"#098D73":"#fff",
                        height: 30,
                        width: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        marginHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: l.bool?"#fff":"#098D73" }}>{l.title}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", marginTop: 10, height:40, justifyContent:"center", alignItems:'center' }}>
                  {listing3.map((l) => (
                    <View
                      style={{
                        borderWidth:1,
                        borderColor:"#098D73",
                        backgroundColor:l.bool?"#098D73":"#fff",
                        height: 30,
                        width: 80,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7,
                        marginHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: l.bool?"#fff":"#098D73"  }}>{l.title}</Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              </View>
      
        <View>
          <SellerItem />
          <SellerItem />
          <SellerItem />
          <SellerItem />
        </View>
      </ScrollView>
      {bool &&
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopColor: "black",
          borderTopWidth: 0.5,
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: "#098D73",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>2 items added</Text>

          <Text style={styles.text}>Total - 230.00</Text>
        </View>
        <View style={{ paddingRight: 10, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("franchisecart");
            }}
          >
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Go to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  textHead: {
    paddingBottom: 10,
    paddingTop: 5,
    color: "white",
    fontSize: 16,
  },
  text: {
    paddingBottom: 2,
    paddingTop: 2,
    color: "white",
    fontSize: 12,
  },
  text2: {
    color: "#23973F",
  },
});

export default Item;





// <View
//         style={{
//           paddingHorizontal: 10,
//           flexDirection: "row",
//           justifyContent: "space-between",
//           borderTopColor: "black",
//           borderTopWidth: 0.5,
//           paddingTop: 20,
//           paddingBottom: 15,
//           backgroundColor: "#098D73",
//         }}
//       >
//         <View style={{ paddingLeft: 10 }}>
//           <Text style={styles.textHead}>2 items added</Text>
//           <Text style={styles.text}>bill - 230.00</Text>
//           <Text style={styles.text}>D.charges - 0.00</Text>
//           <Text style={styles.text}>Total - 230.00</Text>
//         </View>
//         <View style={{ paddingRight: 10, justifyContent: "center" }}>
//           <View style={styles.container2}>
//             <Picker
//               selectedValue={selectedValue}
//               style={{ height: 50, width: 150, color: "#fff" }}
//               onValueChange={(itemValue, itemIndex) =>
//                 setSelectedValue(itemValue)
//               }
//             >
//               <Picker.Item label="Wallet" value="wallet" />
//               <Picker.Item label="Online Pay" value="online" />
//             </Picker>
//           </View>
//           <TouchableOpacity>
//             <View
//               style={{
//                 paddingHorizontal: 10,
//                 paddingVertical: 5,
//                 backgroundColor: "white",
//                 borderRadius: 10,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={styles.text2}>Confirm and Pay</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>