import { View , Text , TouchableOpacity, TextInput,StyleSheet,Image} from "react-native";
import {useNavigation } from '@react-navigation/native'
import { firebase } from "../config";
import React, {useState} from 'react';

const Login = () => {
    const navigation =useNavigation()
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/LOGO2.png')} /> 
      <Text style={styles.headerText}>ESI LEARNING</Text>
      <Text style={{fontWeight:'bold', fontSize:26}}></Text>
      <Text style={styles.description}>Welcome to your ESI E-learning application</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
        />

<TextInput
          style={[styles.textInput, styles.passwordInput]}
          value={password}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        </View> 
        <TouchableOpacity
        onPress={() => loginUser(email,password)}
        style={styles.button}
        >
<Text style={styles.buttonText}>Login</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.button}>
        <Text style={styles.buttonText}>Create an Account Now </Text>
      </TouchableOpacity>

    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
    marginTop: 0, 
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },

});