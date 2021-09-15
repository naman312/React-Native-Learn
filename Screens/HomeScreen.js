
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home'
import SettingsScreen from '../Screens/SettingsScreen';
import DetailOrder from './DetailOrder';
const Drawer = createDrawerNavigator();



// drawer container
export default function HomeScreen({ navigation }) {
    return (
  
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="settings" component={SettingsScreen} />
        <Drawer.Screen name="DetailOrder" component={DetailOrder}/>
      </Drawer.Navigator>
  
  
    );
  }
  