import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./android/app/src/components/HomeScreen";
import NotificationsScreen from "./android/app/src/components/NotificationsScreen";
import ProfileScreen from "./android/app/src/components/ProfileScreen";
import SettingsScreen from "./android/app/src/components/SettingsScreen";
import LinkingButtonScreen from "./android/app/src/components/LinkingButtonScreen";
import linking from "./linking";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="LinkingButton" component={LinkingButtonScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
}