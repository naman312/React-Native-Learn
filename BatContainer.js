import React, {useState} from "react";
import { View, Button, Text,TextInput, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{connect} from 'react-redux'
import { buyBat } from './android/app/src/Redux/bat/BatAction';
import { buyBall } from "./android/app/src/Redux/balls/BallActions";
function BatContainer(props){
    const [number, setNumber]=useState(null);
console.log(props)
    return (
        <View>
            <Text>Number of bats - {props.numofBats} </Text>
            <TextInput 
            onChangeText={setNumber}
             style={styles.input} 
             keyboardType="numeric"
             value={number}  
            />
            
            <Button title={"Buy bats "}  onPress={()=>{
                console.log('props')
                props.buyBat()}}/>
            <Text>jj</Text>
       
        </View>
    )
}
const mapStateToProps=state=>{
    return {
        numofBats: state.bat.numofBats
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        buyBat: (number)=>dispatch(buyBat(number))
    }
        
    
}



// const mapStateToProps=state=>{
//     console.log("state", state.ball.numofBalls)
//     return{
//         numofBalls: state.ball.numofBalls
//     }
// }
// // for getting dispatch method
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         buyBall:()=>dispatch(buyBall())
//     }
// }

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 100
    },
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(BatContainer);

