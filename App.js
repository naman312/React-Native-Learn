import * as React from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Item from './Components/Items'
//home screeen displayed on home
function Home({ navigation }) {
  return (

    // gome screen container for the list of items
    <View style={styles.container}>



    {/* <Flatlist data={[{name: 'naman'},{name: 'cool'}]}
    renderItem={()=>{
      return ( <Item/>) 
       }}/>
    */} 
    <FlatList data={[1,5,6]} renderItem={()=>(<Item/>)} 
     horizontal={true}
    />
    
  
</View>

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
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeDrawer" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>


      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="settings" component={SettingsScreen} />
      </Drawer.Navigator> */}


    </NavigationContainer>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      marginLeft: 0,
      backgroundColor: 'white',
      flexDirection: 'row',

      height: 250,


    }
  }
)