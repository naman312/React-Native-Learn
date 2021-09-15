import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Pressable, TouchableNativeFeedback, View, Image, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { CartContext } from "../ContextStore/CardContext";



let btnHandler = () => {

}

let BtnContainer = () => {

  return (


    <Pressable style={{ backgroundColor: 'red', height: 35, width: 125, borderRadius: 12, alignItems: 'center', padding: 6 }} onPress={() => { btnHandler() }}>
      <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Add To Cart</Text>
    </Pressable>


  )
}

let BtnAddSub = () => {
  return (
    <View style={{ backgroundColor: 'red', height: 35, width: 125, borderRadius: 12, alignItems: 'center', padding: 6, flexDirection: 'row' }}>
      <Pressable onPress={() => { btnHandler() }} style={{ width: 35 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>-</Text>
      </Pressable>

      <Pressable onPress={() => { btnHandler() }} style={{ width: 35, backgroundColor: 'white', height: 34, paddingTop: 8 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>QTY</Text>
      </Pressable>

      <Pressable onPress={() => { btnHandler() }} style={{ width: 35 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>+</Text>
      </Pressable>

    </View>


  )
}


const Itemlist = ({ name, prices, avatar }) => {

  const cart = useContext(CartContext)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('500 ml');
  const [items, setItems] = useState([
    { label: '1 L', value: '1 L' },
    { label: '2 L', value: '2 L' }
  ]);
  let show = 0;
  if (cart.cartlen > 0) {
    show = JSON.stringify(cart.map1[name]);
  }
  return (

    <View style={styles.itemContainer}>
      <View style={styles.categoriesItem}>

        <Image source={{ uri: avatar }}
          style={styles.categoriesItemImage}
          height={200}

        />
      </View>
      <View style={{ marginLeft: 30 }} >
        <Text style={{ marginBottom: 5, fontWeight: '400', textAlign: 'center' }}>{name} </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 5, marginRight: 18 }}>{'\u20B9'}{prices}</Text>
          <Text style={{ fontSize: 15, marginBottom: 5, textDecorationLine: 'line-through', marginRight: 18 }}>{'\u20B9'}154</Text>
          <Text style={{ fontSize: 15, marginBottom: 5, color: "rgba(0, 0, 0.5, 0.9)", fontWeight: '400' }}>({'\u20B9'}290/L)</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 10 }}>
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

          <View style={{ flex: 1, flexDirection: 'row' }}>
            {/*             
            <View style={{ width: 42, height: 50, marginRight: 10 }}>
              <Button
                title="-"
                onPress={() => { cart.sub(prices, name,avatar) }}
              />
            </View>
            <View style={{ width: 42, height: 50, marginRight: 10 }}>
              <Button
                title="+"
                onPress={() => { cart.add(prices, name,avatar) }}
              />
            </View>
            <View style={{ width: 42, height: 50 }}>
                  <Text style={styles.disp}> {show?show:0} </Text>
           
             </View>
 */}
            {/* <BtnContainer /> */}
            {/* <BtnAddSub/> */}

            <View style={{ backgroundColor: 'red', height: 35, width: 125, borderRadius: 12, alignItems: 'center', padding: 6, flexDirection: 'row' }}>
              <Pressable onPress={() => { cart.sub(prices,name,avatar) }} style={{ width: 35 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>-</Text>
              </Pressable>

              <Pressable onPress={() => { btnHandler() }} style={{ width: 35, backgroundColor: 'white', height: 34, paddingTop: 8 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{show?show:0}</Text>
              </Pressable>

              <Pressable onPress={() => {cart.add(prices,name,avatar) }} style={{ width: 35 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>+</Text>
              </Pressable>

            </View>


          </View>

        </View>

      </View>
    </View>
  )



}

const styles = StyleSheet.create({

  box: {
    width: '100%',
    height: '90%',

  },
  itemContainer: {
    alignItems: 'center',
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    paddingTop: 20,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2,
    height: 350

  },
  img: {
    marginTop: 7,
    height: 70,
    width: 700,
    resizeMode: 'contain',
  },
  categoriesItemText: {
    color: 'white'
  },
  categoriesItem: {
    marginTop: 0,
    marginRight: 6,
    height: 210,
    width: 150,
    borderRadius: 6,
    borderWidth: 0,
    borderColor: "white",

  },
  categoriesItemImage: {
    height: 190,
    margin: 0,
    width: "100%",
    backgroundColor: 'white'

  },
  dropdown: {

    maxWidth: 80,
    height: 35,
  },
  disp: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',

    backgroundColor: 'red',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    height: 35,
    width: 50
  }
});

export default Itemlist;
