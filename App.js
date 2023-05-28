import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image,Button,ScrollView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React , {useState, useEffect} from 'react';
import { firebase } from "./config";
 import Login from './src/Login';
 import Registration from './src/Registration';
 import MainContainer from './Screens/MainContainer';
 import Header from './Components/Header';

 const Stack = createStackNavigator();
  
 function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false);
    
  }
  useEffect(() =>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if (initializing) return null;

  if(!user){
    return (
      <Stack.Navigator>
<Stack.Screen
 name="Login"
  component={Login}
  options={{
headerTitle: () => <Header name= "sign in/up" />,
headerStyle: {
height: 0, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#005be4', shadowColor:'#000',
}}} />
<Stack.Screen
 name="Registration"
  component={Registration}
  options={{
headerTitle: () => <Header name= "sign in/up" />,
headerStyle: {
height: 20, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#005be4', shadowColor:'#000',
}}} />
</Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
 name="MainContainer"
  component={MainContainer}
  options={{
headerTitle: () => <Header name= "MainContainer" />,
headerStyle: {
height: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#005be4', shadowColor:'#000',
}}} />
    </Stack.Navigator>
  );
 }


 export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
 }