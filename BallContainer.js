import * as React from 'react';
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { buyBall } from './android/app/src/Redux/balls/BallActions';
import{connect} from 'react-redux'
// first method for reading from global store


 function BallContainer(props){
    return(
         <View>
                <Text>
                    I am in the ball{props.numofBalls}
                </Text>
                <Button title="Buy Ball" onPress={()=>{
                    console.log('i am pressed')
                    console.log(props.numofBalls)
                    props.buyBall()}}/>

         </View>    
    )
}
const mapStateToProps=state=>{
    console.log("state", state.ball.numofBalls)
    return{
        numofBalls: state.ball.numofBalls
    }
}
// for getting dispatch method
const mapDispatchToProps=(dispatch)=>{
    return {
        buyBall:()=>dispatch(buyBall())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)