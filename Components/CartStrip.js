import React, { useContext } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { CartContext } from "../ContextStore/CardContext";
import DetailOrder from '../Screens/DetailOrder';

export default function CartStrip({navigation,show}) {
    const cart = useContext(CartContext)
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Total items:- {cart.cartlen}</Text>
            <Text style={styles.txt}>Total Price:-  {cart.price}</Text>
            <View style={styles.detail}>
               {
                   (show===true)?<Button title="View Details" onPress={()=>navigation.navigate('DetailOrder')} />:null
               }
                
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
    }
)
