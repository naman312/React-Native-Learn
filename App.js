import * as React from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Item from './Components/Items';
import banner from './android/app/src/assets/banner.jpg';
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from 'react-native-gesture-handler';

const images = ["https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree"]


//home screeen displayed on home
function Home({ navigation }) {
  return (
    <ScrollView>
      {/* // gome screen container for the list of items */}
      <View style={styles.container}>
        <FlatList data={[1, 5, 6]} renderItem={() => (<Item />)}
          horizontal={true}
        />
      </View>
      <View>
        <Text>I am in</Text>
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
    },
    img: {
      height: 200,
      width: 500,
      resizeMode: 'stretch'
    }


  }
)