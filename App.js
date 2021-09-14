import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartContext } from './ContextStore/CardContext';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  // const [counter, dispatch] = useReducer(reducer, initialState);
  const [price, setPrice] = useState(0)
  const [pricelen, setPricelen] = useState(0);
  const [ids, setIds] = useState([]);

  // adding items to the carts
  const add = (prices, id) => {
    setPrice(parseInt(prices) + parseInt(price));

    if (ids.includes(id) == false) {
      setIds([...ids, id])
    }
    console.log("ids array ", ids)
    setPricelen(pricelen + 1);
  }
  // subtracting items from carts
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
        <Tab.Navigator 
          
        >
          <Tab.Screen name="HomeDrawer" component={HomeScreen} options={{header:()=>null}}  />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
