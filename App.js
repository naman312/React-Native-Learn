import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState } from 'react';
import { View, Button, Text, Animated, StyleSheet,Linking,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createStore, combineReducers } from 'redux';
import { TextInput } from 'react-native-gesture-handler';
import store from './android/app/src/Redux/store/store';
import BallContainer from './BallContainer';
import BatContainer from './BatContainer';
import UserContainer from './android/app/UserContainer';
export default function App(){
  const [message, setMessage]=useState('');
  const [number, setNumber]=useState('');
 
  const submitHandler=()=>{
    let url ="whatsapp://send?text=" + message +"&phone=91"+number;
    Linking.openURL(url).then(data=>{
      console.log("Whats app successfully data",data)
    }).catch(e=>{
      Alert('make sure you have installed the whatsapp application');
    })
  }
  
  return (
  // <Provider store={store}>
  //   <Text>jdlak</Text>
  //     <BallContainer/>
  //     <BatContainer/>
  //     <UserContainer/>
  // </Provider>

<View>
    <Text>Enter your Query </Text>
    <TextInput
    onChangeText={setMessage}
    style={styles.input}

    />
    <Text>enter the mobile number </Text>
    <TextInput
    onChangeText={setNumber}
    keyboardType="numeric"
    style={styles.input}
    />
    <Button
    title="Chat Now!"
    onPress={()=>{
          submitHandler();
    }}
    />

</View>


  
  )
}

const styles=StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})