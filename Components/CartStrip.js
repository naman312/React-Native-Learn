import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CartContext } from "../ContextStore/CardContext";


export default function CartStrip() {
    const cart=useContext(CartContext)
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Total items:- {cart.cartlen}</Text>
            <Text style={styles.txt}>Total Price:-  {cart.price}</Text>
        </View>
    )

}


const styles = StyleSheet.create(
    {
        container: {
            marginLeft: 0,
            backgroundColor: '#fc8c03',
            flexDirection: 'row',
            height: 50,
        },
        txt: {
            color: 'white',
            fontSize: 20,
            padding: 5,
            
        },
        imageStyle: {
            padding: 5,
            marginLeft: 10,
            marginTop: 4,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems: 'center',
        },
        input: {
            padding: 6,
            flex: 1,


        },
        searchContainer: {

            flexDirection: 'row',
            borderRadius: 30,
            height: 30,
            borderColor: 'black',
            borderWidth: 2,
        },



    }
)