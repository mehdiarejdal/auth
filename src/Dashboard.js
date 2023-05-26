import { View , Text , TouchableOpacity,StyleSheet,SafeAreaView} from "react-native";

import { firebase } from "../config";
import React, {useState,useEffect} from 'react';
// import { styles } from "./Login";
 
const Dashboard = () => {
    const [name, setName] =useState('')

    useEffect(() => {
      firebase.firestore().collection ('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=> {
    if(snapshot.exists){
    setName(snapshot.data())
    }
    else {
      console.log('User does not exist')
    }
  })
    }, [])

return (
  <SafeAreaView style={styles.container}>
  <Text style={{fontSize:20, fontWeight:'bold'}}>
    Hello, {name.firstname}
  </Text>
  <TouchableOpacity 
  onPress={()=> {firebase.auth().signOut()}}
    style={styles.button}ù33
  >
    <Text style={{fontWeight:'bold', fontSize:22}}>Sign out</Text>
  </TouchableOpacity>
  </SafeAreaView>
)
  }
export default Dashboard;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
       alignItems: 'center' ,
       marginTop:100,
      
  },
  button:{
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'#026efd',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:50,
  
  }
  })
