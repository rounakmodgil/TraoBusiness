import React, {Component} from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';


function Addboysorder({pack}) {
  
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headermainContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={pack?require('../asserts/box.png'):require('../asserts/shop.png')}
              style={styles.profileimg}
            />
            <View>
              <Text style={styles.headerText}>John Doe Shop</Text>
              <Text style={styles.headerSubText}>Madhapur, Hyderabad</Text>
            </View>
          </View>
          <Text>Rs 250</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Delivered</Text>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.itemsHeader}>ITEMS</Text>
          <Text style={styles.itemsText}>1 x Milk, 12 x Eggs</Text>
        </View>
        <View style={styles.itemsContainer}>
          <Text style={styles.itemsHeader}>ORDERED ON</Text>
          <Text style={styles.itemsText}>07July 2021 at 12:24am</Text>
        </View>
        
          <View style={styles.rateContainer}>
            <TouchableOpacity>
              <Text style={{color: '#552E30'}}>RateOrder</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: '#552E30'}}>Raise an issue</Text>
            </TouchableOpacity>
          </View>
       
      </View>
    );
  }


export default Addboysorder;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom:10,
    marginLeft:5,
    marginRight:5
  },
  headermainContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerSubText: {
    fontSize: 12,
    color: '#838383',
  },
  profileimg: {
    height: 40,
    width: 40,
    marginRight: 15,
  },
  statusContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(4,133,66,0.25)',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  statusText: {
    color: '#048542',
    fontSize: 10,
  },
  itemsContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 3,
  },
  itemsHeader: {
    color: '#838383',
    fontSize: 12,
  },
  itemsText: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  rateContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15,
    padding: 8,
    marginTop: 3,
  },
});
