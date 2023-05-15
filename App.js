import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image,Button,ScrollView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React , {useState, useEffect} from 'react';
import { firebase } from "./config";
 import Login from './src/Login';
 import Registration from './src/Registration';
 import Dashboard from './src/Dashboard';
 import Header from './components/Header';

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
headerTitle: () => <Header name= "Bug Ninza" />,
headerStyle: {
height: 150, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#00e4de', shadowColor:'#000',
}}} />
<Stack.Screen
 name="Registration"
  component={Registration}
  options={{
headerTitle: () => <Header name= "Bug Ninza" />,
headerStyle: {
height: 150, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#00e4de', shadowColor:'#000',
}}} />
</Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
 name="Dashboard"
  component={Dashboard}
  options={{
headerTitle: () => <Header name= "Dashboard" />,
headerStyle: {
height: 150, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, backgroundColor: '#00e4de', shadowColor:'#000',
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