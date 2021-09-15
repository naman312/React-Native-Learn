import React from 'react';
import {  View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import Item from '../Components/Items';


export default function ListRendered({prior1}){

    const renderItem = ({ item }) => {
  
        return (
          <Item name={item.name}
            prices={item.prices}
            avatar={item.avatar} 
            />
        )
    
      }

    return (
        <View style={styles.container}>
  
        <FlatList data={prior1}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(prior1) ? item => item.id : null}
        />
      </View>
    )
    
}



const styles = StyleSheet.create(
    {
      container: {
        marginLeft: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 350,
      },
      img: {
        height: 200,
        width: 500,
        resizeMode: 'stretch'
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