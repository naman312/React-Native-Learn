import React, { useContext, useEffect, useState } from 'react';
import {View} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";





export default function SliderCity({prior3 }) {
  // destructing into image arrays

  const images=[];
  prior3.map((obj)=>{
      images.push(obj.avatar);
  })

console.log('images of ', images)
  return (

    <View>
      <SliderBox
        images={images}
        resizeMethod={'resize'}
        resizeMode={'stretch'}
        sliderBoxHeight={270}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      />

    </View>
  )

}