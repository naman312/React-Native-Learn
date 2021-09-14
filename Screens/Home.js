import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Item from '../Components/Items';
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import searchIcon from '../android/app/src/assets/search.png';
import axios from 'axios'
import { CartContext } from '../ContextStore/CardContext';
const images = ["https://c8.alamy.com/comp/2B1BXP3/discounts-advertisement-seen-in-a-retail-shop-inside-harbour-city-mall-one-of-the-hong-kongs-premier-shopping-destination-usually-full-of-tourists-and-shoppersthe-deadly-coronavirus-known-as-covid-19-has-caused-most-industries-factories-and-malls-in-china-shut-down-more-than-50-million-people-in-quarantine-with-countries-restriction-on-entries-to-control-the-spread-of-the-virus-as-well-as-more-than-25000-flight-cancellations-worldwide-long-dependent-on-the-spending-of-chinese-buyers-remind-home-tourism-had-it-biggest-hit-2B1BXP3.jpg",
  "https://images.financialexpress.com/2020/12/mallu1200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD-jE5-60oxfDkmTV7E_DvvC_MRjK7DiqlwXciY-k72vaGdP8tqmq_9aAcuBBnpYt2kw&usqp=CAU",
  "https://source.unsplash.com/1024x768/?tree"]


//home screeen displayed on home
export default function Home({ navigation }) {
    const [search, setSearch] = React.useState('');
    const [responseData, setResponsedata] = React.useState([]);
    const [prior1, setPrior1] = React.useState([]);
    const [prior2, setPrior2] = React.useState([]);
    const [prior3, setPrior3] = React.useState([]);
    const [prior4, setPrior4] = React.useState([]);
  
  
  
    // let [images, setImages] = React.useState([]);
    // const [sortData, setSortdata]=React.useState([]);
    const cart = useContext(CartContext)
    useEffect(() => {
      const url = "https://613efce6e9d92a0017e1738f.mockapi.io/items";
      axios.get(url).then((response) => {
  
        let sorted = response.data;
  
        let prio1 = sorted.filter((obj) => {
          return (obj.priority == 1)
  
        })
        let prio2 = sorted.filter((obj) => {
          return (obj.priority == 2)
  
        })
        let prio3 = sorted.filter((obj) => {
          return (obj.priority == 3)
  
        })
        prio3 = prio3.map((obj) => {
          return {
            avatar: obj.avatar
          }
        })
  
        let prio4 = sorted.filter((obj) => {
          return (obj.priority == 9)
  
        })
  
        console.log('i am in prio4 ', prio4[0].avatar)
        setPrior1(prio1);
        setPrior2(prio2);
        setPrior3(prio3);
        setPrior4(prio4);
  
  
        setResponsedata(sorted)
  
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
        {/* //priority-1 of the app view */}
  
  
        <View style={styles.container}>
  
          <FlatList data={prior1}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={(prior1) ? item => item.id : null}
          />
        </View>
  
        <Text> Price of the cart is  {cart.price}</Text>
        <Text>Length of the cart is {cart.cartlen}</Text>
  
        {/*  // priority -2 of the app view */}
        {/* prior4?prior4[0].avatar:null */}
        <View>
          {(prior2.length > 0) ?
            <Image
              source={{ uri: (prior2.length > 0) && prior2[0].avatar }}
              style={styles.img}
            /> : <ActivityIndicator />}
  
        </View>
  
        {/* // priority - 3 of the app view  */}
        <View>
          <SliderBox
            images={images}
            sliderBoxHeight={200}
            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
          />
  
        </View>
  
      </ScrollView>
    )
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