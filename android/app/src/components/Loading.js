import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    
    <ActivityIndicator style={{marginTop: '100%'}} size="large" />
   
  </View>
);

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