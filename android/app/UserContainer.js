import React, {useEffect, useState  } from "react";
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchUsers } from "./src/Redux/users/userAction";
import{connect} from 'react-redux'
// first method for reading from global store


 function UserContainer({userData,fetchUsers}){
  useEffect(()=>{
        fetchUsers();
  },[])
  
    return(
        <View>
 {userData.loading===true? <Text>Loading</Text>: userData.error?<Text>{userData.error}</Text>:null}
     {userData.users && userData.users.map(user=>(
         <Text>{user.id} +  {user.name}  </Text>
     ))}  
        
        </View>
       
    )
}
const mapStateToProps=state=>{
    
    return{
        userData: state.user
    }
}
// for getting dispatch method
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)