import React, { useContext, useState } from 'react'
import { View, Text, Button, TouchableNativeFeedback, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import harpic from "../android/app/src/assets/harpic.jpg"
import { CartContext } from '../ContextStore/CardContext'
import DropDownPicker from 'react-native-dropdown-picker';
import CartStrip from '../Components/CartStrip';

{/* <TouchableNativeFeedback>
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
            <Text style={{ marginBottom: 5, fontWeight: '400' }}>{name} </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
  
              <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 5, marginRight: 18 }}>{'\u20B9'}145</Text>
              <Text style={{ fontSize: 15, marginBottom: 5, textDecorationLine: 'line-through', marginRight: 18 }}>{'\u20B9'}154</Text>
              <Text style={{ fontSize: 15, marginBottom: 5, color: "rgba(0, 0, 0.5, 0.9)", fontWeight: '400' }}>({'\u20B9'}290/L)</Text>
  
            </View>
  
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, marginRight: 10 }}>
  
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
                <Button
                  style={{ backgroundColor: 'white', borderColor: 'red', borderWidth: 2 }}
                  title="Press me"
                />
                <Button style={{ backgroundColor: 'red' }} />
              </View>

            </View>
            
          </View>
        </View>
  
      </TouchableNativeFeedback>
   */}


let DetailView = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('500 ml');
    const [items, setItems] = useState([
        { label: '1 L', value: '1 L' },
        { label: '500 ml', value: '500 ml' }
    ]);
    const cart = useContext(CartContext);
    const totalPrice = "Total Price     " + cart.price;
    const totalItem = "Total Item  " + cart.cartlen;
    return (
        // <>
        //     <View>
        //         {
        //             Object.keys(cart.map1).map((onekey, i) => {
        //                 const str = onekey + "                                                 " + cart.map1[onekey]
        //                 return (
        //                     <React.Fragment key={i}>
        //                         <View style={{ width: 350, height: 50, paddingLeft: 0 }}>
        //                             <Button title={str} />
        //                         </View>
        //                         {/* <View>
        //                        <Button title={String(cart.map1[onekey])} />
        //                        </View>

        //                        */}
        //                     </React.Fragment>

        //                 )
        //             })
        //         }
        //     </View>
        //     <View>
        //         <Button style={{ backgroundColor: 'black' }} title={totalItem} />
        //     </View>
        //     <View >
        //         <Button style={{ backgroundColor: 'black' }} title={totalPrice} />
        //     </View>
        // </>

        <View style={{ backgroundColor: 'white' }} >
            {
                Object.keys(cart.map1).map((onekey, i) => {
                    const str = onekey + "   " + cart.map1[onekey];
                    return (
                        <View key={String(i) + String(onekey)} >
                            <View style={styles.itemContainer}>
                                <View style={styles.categoriesItem}>

                                    <Image source={{ uri: cart.img1[onekey].img }} style={styles.categoriesItemImage} resizeMode="contain" />
                                </View>


                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ marginBottom: 5, fontWeight: '400' }}>{onekey} </Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 5, marginRight: 18 }}>{'\u20B9'}{cart.img1[onekey].price}</Text>
                                        <Text style={{ fontSize: 15, marginBottom: 5, textDecorationLine: 'line-through', marginRight: 18 }}>{'\u20B9'}145</Text>
                                        <Text style={{ fontSize: 15, marginBottom: 5, color: "rgba(0, 0, 0.5, 0.9)", fontWeight: '400' }}>({'\u20B9'}290/L)</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, marginRight: 10 }}>

                                            <DropDownPicker open={open} value={value} items={items} setOpen={setOpen}
                                                setValue={setValue}
                                                setItems={setItems}
                                                style={styles.dropdown}
                                            />
                                        </View>

                                        <View style={{ backgroundColor: 'red', height: 35, width: 125, borderRadius: 12, alignItems: 'center', padding: 6, flexDirection: 'row' }}>
                                            <Pressable onPress={() => { cart.sub(cart.img1[onekey].price, onekey, cart.img1[onekey].img) }} style={{ width: 35 }}>
                                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>-</Text>
                                            </Pressable>

                                            <Pressable style={{ width: 35, backgroundColor: 'white', height: 34, paddingTop: 8 }}>
                                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{parseInt(cart.map1[onekey]) > 0 ? cart.map1[onekey] : 0}</Text>
                                            </Pressable>

                                            <Pressable onPress={() => { cart.add(cart.img1[onekey].price, onekey, cart.img1[onekey].img) }} style={{ width: 35 }}>
                                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>+</Text>
                                            </Pressable>

                                        </View>


                                    </View>

                                </View>
                            </View>

                        </View>
                    )
                })
            }

            <View style={{ marginLeft: 5, marginTop: 30 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 2, marginBottom: 2, marginLeft: 20 }}>Billing Details </Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ letterSpacing: 1, textAlign: 'left', marginLeft: 20 }} >(Price {cart.cartlen} Qty)   </Text>
                    <Text style={{ letterSpacing: 1, marginLeft: 170 }} >  Rs. {cart.price} </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ letterSpacing: 1, textAlign: 'left', marginLeft: 20 }}>Delivery </Text>
                    <Text style={{ letterSpacing: 1, marginLeft: 215 }} >  Free </Text>

                    <Text style={{ letterSpacing: 1, marginLeft: 180 }}>  {cart.price}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ letterSpacing: 1, textAlign: 'left', marginLeft: 20 }}>Total  </Text>
                    <Text style={{ letterSpacing: 1, marginLeft: 230 }}>  Rs. {cart.price}</Text>
                </View>
            </View>


        </View>
    )
}



function DetailOrder() {
    // const cart = useContext(CartContext);
    // const totalPrice = "Total Price     " + cart.price;
    // const totalItem = "Total Item  " + cart.cartlen;
    return (
        <>
            <ScrollView style={{}}>
                <DetailView />
            </ScrollView>
            <CartStrip show={false} />
        </>
    )
}

export default DetailOrder



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
        marginLeft: 20,
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
    categoriesItemText: {
        color: 'white'
    },
    categoriesItem: {
        backgroundColor: "white",
        marginRight: 6,
        height: 100,
        width: 110,


        borderColor: "white",
        alignItems: "center",
        marginBottom: 20
    },
    categoriesItemImage: {
        height: 100,
        width: "100%",

    },
    dropdown: {
        maxWidth: 100,
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