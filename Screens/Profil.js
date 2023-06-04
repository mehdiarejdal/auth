import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const Profil=() =>{

  const aff=()=>{
    Alert.alert("Hi! This is profil")  }
  return (
    <View>
      <Button title="Passer à l'écran B" onPress={aff} />
    </View>
  );
}

export default  Profil