import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home'
import { CartContext } from './ContextStore/CardContext';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  // const [counter, dispatch] = useReducer(reducer, initialState);
  const [price, setPrice] = useState(0)
  const [pricelen, setPricelen] = useState(0);
  const [ids, setIds] = useState([]);
  const add = (prices, id) => {
    setPrice(parseInt(prices) + parseInt(price));

    if (ids.includes(id) == false) {
      setIds([...ids, id])
    }
    console.log("ids array ", ids)
    setPricelen(pricelen + 1);
  }

  const sub = (prices, id) => {
    if (ids.includes(id) == false || price <= 0) {
      return;
    }
    setPrice(parseInt(price) - parseInt(prices));
    setPricelen(pricelen - 1);
  }
  return (
    <CartContext.Provider value={{ ids: ids, price: price, cartlen: pricelen, add: add, sub: sub }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeDrawer" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      marginLeft: 0,
      backgroundColor: 'white',
      flexDirection: 'row',
      height: 250,
    },
    img: {
      height: 200,
      width: 500,
      resizeMode: 'stretch'
    },
    imageStyle: {
      padding: 5,
      marginLeft: 10,
      marginTop: 4,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    input: {
      padding: 6,
      flex: 1,


    },
    searchContainer: {

      flexDirection: 'row',
      borderRadius: 30,
      height: 30,
      borderColor: 'black',
      borderWidth: 2,
    },



  }
)