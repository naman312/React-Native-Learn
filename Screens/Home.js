import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';

import { ScrollView, TextInput } from 'react-native-gesture-handler';
import searchIcon from '../android/app/src/assets/search.png';
import axios from 'axios'
import { CartContext } from '../ContextStore/CardContext';
import ListRendered from '../Components/ListRendered';
import Banner from '../Components/Banner';
import SliderCity from '../Components/SliderCity';
import CartStrip from '../Components/CartStrip';

//home screeen displayed on home
export default function Home({ navigation }) {
    const [search, setSearch] = React.useState('');
    const [responseData, setResponsedata] = React.useState([]);
    const [prior1, setPrior1] = React.useState([]);
    const [prior2, setPrior2] = React.useState([]);
    const [prior3, setPrior3] = React.useState([]);
    const [prior4, setPrior4] = React.useState([]);
    const cart = useContext(CartContext)
    
    // Api Calling for extracting data
    useEffect(() => {
      const url = "https://613efce6e9d92a0017e1738f.mockapi.io/items";
      axios.get(url).then((response) => {
        // console.log("response",response)
        let sorted = [...response.data];
  
        let prio1 = sorted.filter((obj) => {
          return (obj.priority == 1)
  
        })
        let prio2 = sorted.filter((obj) => {
          return (obj.priority == 2)
  
        })
        let prio3 = sorted.filter((obj) => {
          return (obj.priority == 3)
  
        })

        console.log("----------------", prio3)
        
  
        let prio4 = sorted.filter((obj) => {
          return (obj.priority == 9)
  
        })
  
       
        setPrior1(prio1);
        setPrior2(prio2);
        setPrior3(prio3);
        setPrior4(prio4);
  
  
        setResponsedata(sorted)
  
      }).catch((e) => {
        console.log('i am in the error',e)
      })
    }, [])
    const handleSwitch=(switchparam,prior)=>{
console.log('i am called ib the switch',switchparam)
       
        switch(switchparam){
                case 'Flatlist': 
                    return  <ListRendered prior1={prior} />;
                case 'slider':
                    return <SliderCity prior3={prior} />    ;
                case  'banner':
                    return <Banner prior2={prior} />;
                default:
                    return <ActivityIndicator/>
            }
    }


  
    return (
        <>
      <ScrollView contentContainerStyle={{backgroundColor: 'white'}}   showsVerticalScrollIndicator={false}>
  {/*search bat */}
       
      
        <View style={styles.searchContainer}>
          <Image
            style={styles.imageStyle}
            source={searchIcon}
          />
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.offers}>
        <Text style={styles.offtxt}>Exclusive Offers for you </Text>
        </View>
        {/* //priority-1 of the app view */}
       
        { prior1.length>0?handleSwitch(prior1[0].type,prior1):<ActivityIndicator/> } 
        
       
  
        {/*  // priority -2 of the app view */}
            {prior2.length>0?handleSwitch(prior2[0].type,prior2):<ActivityIndicator/>}
      
      
        {/* // priority - 3 of the app view  */}
            {prior3.length>0?handleSwitch(prior3[0].type,prior3):<ActivityIndicator/>}    

       
      </ScrollView>
      {cart.cartlen>0 && <CartStrip show navigation={navigation}/>}
      
       </>
    )
  }

const styles = StyleSheet.create(
    { 
      offers:{
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10
       
    },
    
    offtxt:{
      fontSize: 20,
      fontWeight: 'bold'
    },
      container: {
        marginLeft: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 250,
       position: 'absolute', 
       left: 0, 
       right: 0, 
       bottom: 0,
        
        elevation: 11
      },
      img: {
        height: 200,
        width: 500,
        resizeMode: 'stretch'
      },
      imageStyle: {
       // paddingLeft: 5,
        // alignContent: 'center',
        // justifyContent: 'center',
        // paddingTop: 0 ,
        marginLeft: 3,
        marginTop: 3,
       
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      input: {
        padding: 8,
        flex: 1,
      },
      searchContainer: {
        marginLeft: 24,
        width: 350,
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 10,
        height: 30,
        borderColor: 'black',
        borderWidth: 0.4,
        backgroundColor: 'white'
      },
  
  
  
    }
  )