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
  const [map1, setMap1] = useState({});
  const [img1,setImg1]=useState({});

  // adding items to the carts
  const add = (prices, id,img) => {
    console.log('map in addition ', map1);
    setPrice(parseInt(prices) + parseInt(price));
    // ids.includes(id) == false
    console.log('nas is ')
    if (map1.hasOwnProperty(String((id))) == false) {
          setIds([...ids, id])
          let map2 = {};
          map2[id] = 1;
          setMap1({ ...map1, ...map2 });
         //images with id 
          let img2={};
         //--------------changing object structure------

       img2[id]={img: img, price: parseInt(prices)};


          // img2[id]['img']=img;
          // img2[id]['price']=parseInt(prices);

          setImg1({...img1,...img2});
     

    } else {
      
          let freq = parseInt(map1[id]);
          let map3 = {};
          map3[id] = parseInt(freq) + parseInt(1)
          setMap1({ ...map1, ...map3 });

          
    }
    setPricelen(pricelen + 1);
    console.log("images and id ", img1)
  }
  // subtracting items from carts
  const sub = (prices, id1,img) => {
    const id = id1;

    if (price <= 0 || map1.hasOwnProperty(id) == false || parseInt(map1[id]) <= 0) {
      return;
    } else {
      const freq = parseInt(map1[id]);
      
      let map2 = {};
      map2[id] = parseInt(freq) - parseInt(1)
       
      setMap1({ ...map1, ...map2 });
      //images 2 
      
      //--------------changing object structure------
      let img2={};

      img2[id]={img: img, price: parseInt(prices)};

          // img2[id]['img']=img;
          // img2[id]['price']=parseInt(prices);
     
      setImg1({...img1,...img2});


    }

    setPrice(parseInt(price) - parseInt(prices));
    setPricelen(pricelen - 1);

  }

  return (
    <CartContext.Provider value={{ ids: ids, price: price, cartlen: pricelen, add: add, sub: sub, map1: map1,img1: img1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeDrawer" component={HomeScreen} options={{ header: () => null }} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
