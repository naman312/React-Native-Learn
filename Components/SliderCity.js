import React, { useContext, useEffect, useState } from 'react';
import {View,StyleSheet} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";





export default function SliderCity({prior3 }) {
  // destructing into image arrays

  const images=[];
  prior3.map((obj)=>{
      images.push(obj.avatar);
  })

console.log('images of ', images)
  return (

    <View style={styles.container}>
      <SliderBox
        images={images}
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        sliderBoxHeight={170}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      
      />

    </View>
  )

}

const styles=StyleSheet.create({
    container:{
      paddingTop: 10,
      height: 190,
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
    
    
})