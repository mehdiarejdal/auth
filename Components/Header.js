import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
    <View style={styles.logo}>
      <Text style={styles.logo_text}>ESI-Learning</Text></View>
      {/* <TextInput
        placeholder="Search courses"
        style={styles.searchBar}
        placeholderTextColor={'grey'}
      /> */}
      <View style={styles.profil_button}>
      <TouchableOpacity onPress={()=>{Alert.alert("Hi! This is profil")} } >
        <Ionicons name="person-outline" size={28} color={'#4E6CFF'} />
      </TouchableOpacity></View>
    </View>
  );
};

const styles =StyleSheet.create( {
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'lightGrey',
    borderBottomWidth: 0.5,
  },
  logo:{
    //borderWidth:2,
    flex:6,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:'10%'

  },
  profil_button:{
    //borderWidth:2,
    flex:1,
    ustifyContent:'center',
    alignItems:'center',
  },
  logo_text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#4E6CFF',
  },
  
});

export default NavigationBar;
