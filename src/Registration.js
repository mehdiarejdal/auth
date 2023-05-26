import { View , Text , TouchableOpacity, TextInput,StyleSheet, Image} from "react-native";
import {useNavigation } from '@react-navigation/native'
import { firebase } from "../config";
import React, {useState} from 'react';

const Registration = () => {
   
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
  

  const registerUser = async (email,role, password,firstname,lastname) => {
    await firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then (() => {
    firebase.auth().currentUser.sendEmailVerification ({
    handleCodeInApp: true,
    url:'https://test1-4c8e8.firebaseapp.com',
    })
    .then (() => {
    alert ('Verification email sent')
    }).catch((error) => {
    alert (error.message)
    })
    
    .then (() => {
    firebase.firestore().collection ('users')
    .doc(firebase.auth().currentUser.uid)
    .set({
      firstname,
      lastname,
      email,

    })
    })
    .catch((error) => {
      alert(error.message)
    })
    .catch((error=> {
      alert(error.message)
    }))
  })}
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./LOGO.png')} />
        <Text style={{fontWeight:'bold','fontSize':23 }}>
          REGISTER HERE!
        </Text>
        <View style={{marginTop:40}}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder=" email"
          onChangeText={text => setEmail(text)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Etudiant/Professeur"
          onChangeText={text => setRole(text)}
          autoCorrect={false}
        />

        
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder=" password"
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          autoCorrect={false}
        />
        
        </View>
        <TouchableOpacity
        onPress={() => registerUser(email,password,firstname,lastname)}
        style={styles.button}
        >
<Text style={{fontWeight:'bold', fontSize:22}}>Register</Text>
        </TouchableOpacity>
      </View>




    )
   }
  
export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    marginBottom: 0,
    width: 160, height: 150
  },
  button:{
    marginTop:50,
    height:50,
    width:250,
    backgroundColor:'#026efd',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:50,
  
  }
});

