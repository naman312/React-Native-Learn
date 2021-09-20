
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Image from 'react-native'
import Home from '../Screens/Home'
import SettingsScreen from '../Screens/SettingsScreen';
import harpic from '../android/app/src/assets/harpic.jpg'
import SubmitScreen from './SubmitScreen';


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
          navigation={navigation}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

        
        />
        <Drawer.Screen name="settings" component={SettingsScreen}  options={{ header: ()=>(null)  }} />
        <Drawer.Screen name="submit" component={SubmitScreen} options={{header: ()=>(null)}}/>
         
      </Drawer.Navigator>
  
  
    );
  }
  