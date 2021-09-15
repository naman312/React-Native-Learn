
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Image from 'react-native'
import Home from '../Screens/Home'
import SettingsScreen from '../Screens/SettingsScreen';
import DetailOrder from './DetailOrder'; 
import harpic from '../android/app/src/assets/harpic.jpg'



const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../android/app/src/assets/harpic.jpg')}
    />
  );
}


// drawer container
export default function HomeScreen({ navigation }) {
    return (
  
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}
        
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
        />
        <Drawer.Screen name="settings" component={SettingsScreen} />
        <Drawer.Screen name="DetailOrder" component={DetailOrder}/>
      </Drawer.Navigator>
  
  
    );
  }
  