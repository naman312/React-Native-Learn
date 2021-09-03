import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Image } from "react-native";
import harpic from "./android/app/src/assets/harpic.jpg"
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from "react-native-paper";
const Itemlist = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('500 ml');
  const [items, setItems] = useState([
    { label: '1 L', value: '1 L' },
    { label: '500 ml', value: '500 ml' }
  ]);


  return (
    <TouchableNativeFeedback>

      <View style={styles.itemContainer}>
        <View style={styles.categoriesItem}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.categoriesItemText}>
            Offer
          </Text>


          <Image
            source={harpic}
            style={styles.categoriesItemImage}
            resizeMode="contain"
          />


        </View>


        <View style={{ marginLeft: 30 }} >
          <Text style={{ marginBottom: 5, fontWeight: '400' }}>SunnyFresh Toilet Cleaner </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>

            <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 5, marginRight: 18 }}>{'\u20B9'}145</Text>
            <Text style={{ fontSize: 15, marginBottom: 5, textDecorationLine: 'line-through', marginRight: 18 }}>{'\u20B9'}154</Text>
            <Text style={{ fontSize: 15, marginBottom: 5, color: "rgba(0, 0, 0.5, 0.9)", fontWeight: '400' }}>({'\u20B9'}290/L)</Text>

          </View>
          
<View style={{flexDirection: 'row'}}>
  <View style={{flex: 1,marginRight: 10}}>

  <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            
            style={styles.dropdown}
          />


  </View>
  <View style={{flex: 1, flexDirection: 'row'}}>

  <Button
  style={{backgroundColor: 'white', borderColor: 'red',borderWidth: 2 }}
        title="Press me"
       
      />
        
    
      <Button style={{backgroundColor: 'red'}}/>

</View>
          

</View>
          


        </View>


      </View>

    </TouchableNativeFeedback>


  )



}


const FlexDirectionBasics = () => {

  return (
    <View style={[styles.container]} >

      <View style={[styles.box]}>
        <Itemlist />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    marginTop: 1,

  },
  box: {
    width: '100%',
    height: '43%',
  },
  itemContainer: {
    alignItems: 'center',

    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2

  },
  img: {
    marginTop: 7,
    height: 70,
    width: 700,
    resizeMode: 'contain',
  },
  categoriesItem: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginRight: 6,
    height: 110,
    width: 110,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  categoriesItemImage: {
    height: 70,
    width: "100%",
    
  },
  dropdown: {
    maxWidth: 100,
    height: 35,
    
  }
});

export default FlexDirectionBasics;