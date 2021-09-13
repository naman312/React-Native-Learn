import React, { useContext, useEffect,useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Item from './Components/Items';
import banner from './android/app/src/assets/banner.jpg';
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import searchIcon from './android/app/src/assets/search.png';
import axios from 'axios'
// import { Cart } from './ContextStore/Cart';
import { CartContext } from './ContextStore/CardContext';
const images = ["https://c8.alamy.com/comp/2B1BXP3/discounts-advertisement-seen-in-a-retail-shop-inside-harbour-city-mall-one-of-the-hong-kongs-premier-shopping-destination-usually-full-of-tourists-and-shoppersthe-deadly-coronavirus-known-as-covid-19-has-caused-most-industries-factories-and-malls-in-china-shut-down-more-than-50-million-people-in-quarantine-with-countries-restriction-on-entries-to-control-the-spread-of-the-virus-as-well-as-more-than-25000-flight-cancellations-worldwide-long-dependent-on-the-spending-of-chinese-buyers-remind-home-tourism-had-it-biggest-hit-2B1BXP3.jpg",
  "https://images.financialexpress.com/2020/12/mallu1200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD-jE5-60oxfDkmTV7E_DvvC_MRjK7DiqlwXciY-k72vaGdP8tqmq_9aAcuBBnpYt2kw&usqp=CAU",
  "https://source.unsplash.com/1024x768/?tree"]







//home screeen displayed on home
function Home({ navigation }) {
  const [search, setSearch] = React.useState('');
  const [responseData, setResponsedata] = React.useState([]);
  const cart=useContext(CartContext)
  useEffect(() => {
    const url = "https://613efce6e9d92a0017e1738f.mockapi.io/items";
    axios.get(url).then((response) => {

      setResponsedata(response.data);

      // sorting of the data on the basis of priority has been done

      let sorted = [...responseData];
      sorted = sorted.sort((a, b) => {
        return (a.priority >= b.priority)
      })
      // console.log("sorted data us ",sorted)



      // setResponsedata([...sorted]);
      // setResponsedata(sorted)
      console.log(typeof (responseData[24]));
    }).catch(() => {
      console.log('i am in the error')
    })

  }, [])
  const renderItem = ({ item }) => {

    return (
      <Item name={item.name}
        prices={item.prices}
        avatar={item.avatar} />
    )

  }

  return (
    <ScrollView>


      <View style={styles.searchContainer}>
        <Image
          style={styles.imageStyle}
          source={searchIcon}
        />
        <TextInput
          style={styles.input}
        />
      </View>


      <View style={styles.container}>
        <FlatList data={responseData}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View>
      <Text> Price of the cart is  {cart.price}</Text>
      <Text>Length of the cart is {cart.cartlen}</Text>
      <View>

        <Image
          source={banner}
          style={styles.img}
        />
      </View>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      />

      {/* // now moving towards banner thing */}
    </ScrollView>
  )
}

// drawer container
function HomeScreen({ navigation }) {
  return (

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="settings" component={SettingsScreen} />
    </Drawer.Navigator>


  );
}
// screen of settings 
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  // const [counter, dispatch] = useReducer(reducer, initialState);
const [price,setPrice]=useState(0)
const [pricelen, setPricelen]=useState(0);
const [ids,setIds]=useState([]);
  const add=(prices,id)=>{
  setPrice(parseInt(prices)+parseInt(price));
     
    if(ids.includes(id)==false){
      setIds([...ids,id])
    }
console.log("ids array ",ids)
  setPricelen(pricelen+1);
}

const sub=(prices,id)=>{
  if(ids.includes(id)==false || price<=0){
    return ;
  }
  setPrice(parseInt(price)-parseInt(prices));
  setPricelen(pricelen-1);
}




  
  return (
    <CartContext.Provider value={{ ids:ids, price: price, cartlen:pricelen, add: add,sub:sub}}>
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