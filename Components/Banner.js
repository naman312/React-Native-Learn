import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';



export default function Banner({prior2}) {
    return (
        <View>
            {(prior2.length > 0) ?
                <Image
                    source={{ uri: (prior2.length > 0) && prior2[0].avatar }}
                    style={styles.img}
                /> : <ActivityIndicator />}

        </View>
    )
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
        width: 400,
        resizeMode: 'contain'
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