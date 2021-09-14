import React, { useContext, useEffect, useState } from 'react';
import {View} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";





export default function SliderCity({ images }) {
  return (

    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={200}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      />

    </View>
  )

}