import React, { useContext } from 'react'
import { Button, View, Text, StyleSheet,Pressable } from 'react-native'
import { CartContext } from "../ContextStore/CardContext";
import DetailOrder from '../Screens/DetailOrder';


export default function CartStrip({navigation,show}) {
 
let Btn=({title})=>{
  if(title=='View')
  return (
    <Pressable style={{borderRadius: 5, height: 40, width: 80,backgroundColor: 'white'}} onPress={()=>navigation.navigate('Detail Order')}>
      <Text style={{color: 'red',paddingLeft: 20,paddingTop: 8,fontSize: 16,fontWeight: 'bold'}}>{title}</Text>
    </Pressable>
  )
  return(
    <Pressable style={{borderRadius: 5, height: 40, width: 80,backgroundColor: 'white'}}>
    <Text style={{color: 'red',paddingLeft: 8,paddingTop: 8,fontSize: 16,fontWeight: 'bold'}}>{title}</Text>
  </Pressable>
  )
}   
  
  const cart = useContext(CartContext)
    //{cart.cartlen}
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Total  </Text>
            <Text style={styles.txtprice}>Rs.{cart.price}</Text>
            <Text style={styles.txt}>Qty </Text>
            <Text style={styles.txtprice}>{cart.cartlen}</Text>
            <View style={styles.detail}>
               {
                   (show===true)?<Btn title='View'/>:<Btn title='Confirm'/>
               }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            marginLeft: 0,
            backgroundColor: 'red',
            flexDirection: 'row',
            height: 50,
            justifyContent: 'center',
            paddingBottom: 5
    
        },
        txt: {
            color: 'white',
            fontSize: 12,
            paddingBottom: 3,
            textAlignVertical: 'bottom',
            marginLeft: 2

        },
        detail: {
            width: 80,
            height: 35,
            marginLeft: 90,
            borderRadius: 19,
            alignContent: 'center',
            marginTop: 7,

            justifyContent: 'center',
            fontSize: 6


        },
        btn:{
            borderColor: 'white',
            
            borderRadius: 39
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
        
      },
      txtprice:{
        color: 'white',
        fontSize: 18,
        textAlignVertical: 'bottom',
        marginLeft: 0,
        marginRight: 20,
        fontWeight: 'bold'
      }
    }
)
