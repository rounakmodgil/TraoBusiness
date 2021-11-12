import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text } from "react-native";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";

import SplashScreen from "./pages/splashscreen";
import Login from "./pages/login";
import RiderSignup from "./pages/ridersignup";
import SellerSetup from "./pages/sellersetup";
import Otp from "./pages/sellerotp";
import Wallet from "./pages/wallet";
import TravoBoyProfile from "./pages/travoboyprofile";
import TravoBoyHome from "./pages/travoboyhome";
import Unassigned from "./pages/unassigned";
import Pickupmap from "./pages/pickupmap";
import Dropmap from "./pages/dropmap";
import Notification from "./pages/notification";
import IncomeTransaction from "./pages/incometransaction";
import Orders from "./pages/order";
import Travoagencyhome from "./pages/travoagencyhome";
import Manageboys from "./pages/manageboys";
import AddVehicle from "./pages/addvehicle";
import AddBoys from "./pages/addboys";
import Shops from "./pages/shops";
import Travoagencyorder from "./pages/travoagencyorder";
import Setup from "./pages/setup";
import AddShop from "./pages/addshop";
import Deliverysellersignup from "./pages/deliverysellersignup";
import SellerSignup from "./pages/sellersignup";
import RiderOtp from "./pages/riderotp";
import SellerPhoneNumber from "./pages/sellerphonenumber";
import RiderPhonenumber from "./pages/riderphonenumber";
import FranchiseHome from "./pages/franchisehome";
import Sellerhome from "./pages/sellerhome";
import TraoCard from "./pages/traocard";
import ReturnEntry from "./pages/returnentry";
import OfflineSales from "./pages/offlinesales";
import AddItem from "./pages/additem";
import NewOrders from "./pages/neworders";
import ListItem from "./pages/items";
import Stock from "./pages/stock";
import AddBoys2 from "./pages/addboys2";
import AddBoys3 from "./pages/addboys3";

import Setup2 from "./pages/setup2";
import SetupMap from "./pages/setupmap";
import BoyDelivered from "./pages/boydelivered";
import BoySettings1 from "./pages/boysettings";
import BoyPersonalSettings from "./pages/boypersonalsettings";
import Boykycsettings from "./pages/boykycsettings";
import BoySettings from "./pages/boysettings";
import Boypasswordsettings from "./pages/boypasswordsettings";
import Boyvehiclesettings from "./pages/boyvehiclesettings";
import Boybankaccount from "./pages/boybankaccount";
import FranchiseOnlineOrders from "./pages/franchiseonlineorders";
import Setup3 from "./pages/setup3";
import AddboysVerify from "./pages/addboysverify";
import FranchiseSetup from "./pages/franchisesetup";
import FranchiseSetup2 from "./pages/franchisesetup2";
import FranchiseSetup3 from "./pages/franchisesetup3";
import FranchiseMap from "./pages/franchisemap";
import Franchisesetup4 from "./pages/franchisesetup4";
import FranchiseOnlineOrders2 from "./pages/franchiseonlineorders2";
import SellerSetup2 from "./pages/sellersetup2";
import SellerSetup3 from "./pages/sellersetup3";
import SellerMap from "./pages/sellermap";
import Sellersetup4 from "./pages/sellersetup4";
import SellerOnlineOrders from "./pages/selleronlineorders";
import SellerOnlineOrders2 from "./pages/selleronlineorders2";
import SellerOfflineSales from "./pages/sellerofflinesales";
import OfflineSales2 from "./pages/sellerofflinesales2";
import FranchiseOfflineSales2 from "./pages/franchiseofflinesales2";
import AddBoysOtp from "./pages/addboysotp";
import BoyPickupSettings from "./pages/boypickupsettings";
import FranchiseCart from "./pages/franchisecart";
import SellerItem from "./pages/selleritem";
import DeliveryFee from "./pages/deliveryfee";

export default function Routes() {
  const [varsplashscreen, setVarsplashscreen] = useState(true);
  const [varloginscreen, setVarloginscreen] = useState(false);
  const [varsellersignup, setVarsellersignup] = useState(false);
  const [varridersignup, setVarridersignup] = useState(false);
  const [varboytabscreen, setVarboytabscreen] = useState(false);
  const [varagencytabscreen, setVaragencytabscreen] = useState(false);
  const [varfranchisetabscreen, setVarfranchisetabscreen] = useState(false);
  const [varsellertabscreen, setVarsellertabscreen] = useState(false);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const SplashStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="splashscreen"
        component={SplashScreen}
        initialParams={{
          Varsplashscreen: setVarsplashscreen,
          Varloginscreen: setVarloginscreen,
        }}
      />
    </Stack.Navigator>
  );
  const Loginstack = () => (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} initialParams={{}} />
      <Stack.Screen
        name="deliverysellersignup"
        component={Deliverysellersignup}
        initialParams={{
          Varloginscreen: setVarloginscreen,
          Varsellersignup: setVarsellersignup,
          Varridersignup: setVarridersignup,
        }}
      />
    </Stack.Navigator>
  );
  const RiderSignupstack = () => (
    <Stack.Navigator
      initialRouteName="riderphonenumber"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="riderphonenumber" component={RiderPhonenumber} />
      <Stack.Screen name="riderotp" component={RiderOtp} />
      <Stack.Screen
        name="ridersignup"
        component={RiderSignup}
        initialParams={{
          Varridersignup: setVarridersignup,
          Varagencytabscreen: setVaragencytabscreen,
          Varboytabscreen: setVarboytabscreen,
        }}
      />
    </Stack.Navigator>
  );
  const SellerSignupstack = () => (
    <Stack.Navigator
      initialRouteName="sellerphonenumber"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="sellerphonenumber" component={SellerPhoneNumber} />
      <Stack.Screen name="sellerotp" component={Otp} />
      <Stack.Screen
        name="sellersignup"
        component={SellerSignup}
        initialParams={{
          Varsellersignup: setVarsellersignup,
          Varfranchisetabscreen: setVarfranchisetabscreen,
          Varsellertabscreen: setVarsellertabscreen,
        }}
      />
    </Stack.Navigator>
  );
  const BoyTabstack = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={TravoBoyHome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Fontisto
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Orders
            </Text>
          ),
          title: "Orders",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="shopping-bag"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TravoBoyProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const AgencyTab = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Travoagencyhome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Fontisto
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="=Shops"
        component={Shops}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Shops
            </Text>
          ),
          title: "Shops",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="shopping-bag"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TravoBoyProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const FranchiseTab = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="FranchiseHome"
        component={FranchiseHome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Fontisto
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Income"
        component={IncomeTransaction}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Income
            </Text>
          ),
          title: "Income",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="cash"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TravoBoyProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const SellerTab = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="FranchiseHome"
        component={Sellerhome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Fontisto
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Income"
        component={IncomeTransaction}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Income
            </Text>
          ),
          title: "Income",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="cash"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TravoBoyProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const BoyMainStack = () => (
    <Stack.Navigator initialRouteName="boytab">
      <Stack.Screen
        options={{ headerShown: false }}
        name="boytab"
        component={BoyTabstack}
      />
      <Stack.Screen name="unassignedOrder" component={Unassigned} />
      <Stack.Screen name="pickupmap" component={Pickupmap} />
      <Stack.Screen name="dropmap" component={Dropmap} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="incometransaction" component={IncomeTransaction} />
      <Stack.Screen name="boydelivered" component={BoyDelivered} />
      <Stack.Screen name="boysettings" component={BoySettings} />
      <Stack.Screen
        name="boypersonalsettings"
        component={BoyPersonalSettings}
      />
      <Stack.Screen name="boykycsettings" component={Boykycsettings} />
      <Stack.Screen
        name="boypasswordsettings"
        component={Boypasswordsettings}
      />
      <Stack.Screen name="boyvehiclesettings" component={Boyvehiclesettings} />
      <Stack.Screen name="boypickupsettings" component={BoyPickupSettings} />
      <Stack.Screen name="Add Bank Account" component={Boybankaccount} />
    </Stack.Navigator>
  );

  const AgencyMainStack = () => (
    <Stack.Navigator initialRouteName="agencytab">
      <Stack.Screen
        options={{ headerShown: false }}
        name="agencytab"
        component={AgencyTab}
      />

      <Stack.Screen name="addboysverify" component={AddboysVerify} />
      <Stack.Screen name="addboysotp" component={AddBoysOtp} />
      <Stack.Screen name="addboys" component={AddBoys} />
      <Stack.Screen name="addboys2" component={AddBoys2} />
      <Stack.Screen name="addboys3" component={AddBoys3} />
      <Stack.Screen name="manageboys" component={Manageboys} />
      <Stack.Screen name="addvehicle" component={AddVehicle} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="travoagencyorder" component={Travoagencyorder} />
      <Stack.Screen name="setup" component={Setup} />
      <Stack.Screen name="setup2" component={Setup2} />
      <Stack.Screen name="setup3" component={Setup3} />
      <Stack.Screen name="addshop" component={AddShop} />
      <Stack.Screen name="incometransaction" component={IncomeTransaction} />
      <Stack.Screen name="setupmap" component={SetupMap} />
      <Stack.Screen name="deliveryfee" component={DeliveryFee} />
    </Stack.Navigator>
  );

  const FranchiseStack = () => (
    <Stack.Navigator initialRouteName="franchisetab">
      <Stack.Screen
        options={{ headerShown: false }}
        name="franchisetab"
        component={FranchiseTab}
      />
      <Stack.Screen name="franchisetraocard" component={TraoCard} />
      <Stack.Screen name="franchisereturnentry" component={ReturnEntry} />
      <Stack.Screen name="franchiseitems" component={ListItem} />
      <Stack.Screen name="franchisesetup" component={FranchiseSetup} />
      <Stack.Screen name="franchisesetup2" component={FranchiseSetup2} />
      <Stack.Screen name="franchisesetup3" component={FranchiseSetup3} />
      <Stack.Screen name="franchisesetup4" component={Franchisesetup4} />
      <Stack.Screen name="franchisemap" component={FranchiseMap} />
      <Stack.Screen name="franchiseofflinesales" component={OfflineSales} />
      <Stack.Screen name="franchiseneworders" component={NewOrders} />
      <Stack.Screen
        name="franchiseonlineorders"
        component={FranchiseOnlineOrders}
      />
      <Stack.Screen name="franchisenotification" component={Notification} />
      <Stack.Screen name="stock" component={Stock} />
      <Stack.Screen name="incometransaction" component={IncomeTransaction} />
      <Stack.Screen
        name="franchiseonlineorders2"
        component={FranchiseOnlineOrders2}
      />
      <Stack.Screen
        name="franchiseofflinesales2"
        component={FranchiseOfflineSales2}
      />
      <Stack.Screen name="franchisecart" component={FranchiseCart} />
    </Stack.Navigator>
  );
  const SellerStack = () => (
    <Stack.Navigator initialRouteName="sellertab">
      <Stack.Screen
        options={{ headerShown: false }}
        name="sellertab"
        component={SellerTab}
      />
      <Stack.Screen name="sellersetup" component={SellerSetup} />
      <Stack.Screen name="sellersetup2" component={SellerSetup2} />
      <Stack.Screen name="sellersetup3" component={SellerSetup3} />
      <Stack.Screen name="sellermap" component={SellerMap} />
      <Stack.Screen name="sellersetup4" component={Sellersetup4} />
      <Stack.Screen name="selleradditem" component={AddItem} />
      <Stack.Screen name="sellerneworders" component={NewOrders} />
      <Stack.Screen name="sellernotification" component={Notification} />
      <Stack.Screen name="selleronlineorders" component={SellerOnlineOrders} />
      <Stack.Screen
        name="selleronlineorders2"
        component={SellerOnlineOrders2}
      />
      <Stack.Screen name="selleritems" component={SellerItem} />
      <Stack.Screen name="sellerofflinesales" component={SellerOfflineSales} />
      <Stack.Screen name="stock" component={Stock} />
      <Stack.Screen name="incometransaction" component={IncomeTransaction} />
      <Stack.Screen name="offlinesales2" component={OfflineSales2} />
    </Stack.Navigator>
  );

  return (
    <>
      <NavigationContainer>
        {varsplashscreen && <SplashStack />}
        {varloginscreen && <Loginstack />}
        {varsellersignup && <SellerSignupstack />}
        {varridersignup && <RiderSignupstack />}
        {varboytabscreen && <BoyMainStack />}
        {varagencytabscreen && <AgencyMainStack />}
        {varfranchisetabscreen && <FranchiseStack />}
        {varsellertabscreen && <SellerStack />}
      </NavigationContainer>
    </>
  );
}
