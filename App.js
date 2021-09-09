import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState , useEffect} from 'react';
import { View, Button, Text, Animated, StyleSheet,Linking,Alert,PermissionsAndroid } from 'react-native';
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
import openMap from 'react-native-open-maps'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


export default function App(){
  const [message, setMessage]=useState('');
  const [number, setNumber]=useState('');
  const _goToYosemite=()=>{
    openMap({ latitude: 37.865101, longitude: -119.538330 });
  }

    
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
    <Button
    title="Google Map"
    onPress={()=>{
      _goToYosemite();
    }}
    />

<Button title="request permissions" onPress={requestCameraPermission} />

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