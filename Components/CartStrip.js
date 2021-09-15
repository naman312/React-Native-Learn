import React, { useContext } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { CartContext } from "../ContextStore/CardContext";
import DetailOrder from '../Screens/DetailOrder';

export default function CartStrip({navigation}) {
    const cart = useContext(CartContext)
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Total items:- {cart.cartlen}</Text>
            <Text style={styles.txt}>Total Price:-  {cart.price}</Text>
            <View style={styles.detail}>
                <Button
                    title="View Details"
                    onPress={()=>navigation.navigate('DetailOrder')}
                />
            </View>

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
            fontSize: 12,
            padding: 5,

        },
        detail: {
            width: 100,
            marginLeft: 115
        }



    }
)