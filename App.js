import AsyncStorage from '@react-native-async-storage/async-storage';

import * as React from 'react';
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createStore, combineReducers } from 'redux';
import { TextInput } from 'react-native-gesture-handler';
import store from './android/app/src/Redux/store/store';
import BallContainer from './BallContainer';
export default function App(){
  return (
  <Provider store={store}>
    <Text>jdlak</Text>
      <BallContainer/>
  </Provider>

  
  )
}