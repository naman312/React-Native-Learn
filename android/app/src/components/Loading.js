import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = ({ top }) => {
  let marg=2; 
    if(top==false){
        marg=5;
    }else{
        marg=750;
    }
    
    return (
        <View style={[styles.container, styles.horizontal, { marginTop: marg }]}>

            <ActivityIndicator  size="large" />

        </View>)
}



const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",

    },
    horizontal: {

        justifyContent: "center",
        padding: 10
    }
});

export default Loading;