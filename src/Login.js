import { View , Text , TouchableOpacity, TextInput,StyleSheet} from "react-native";
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
      <Text style={{fontWeight:'bold', fontSize:26}}></Text>
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        
        <TouchableOpacity
        onPress={() => loginUser(email,password)}
        style={styles.button}
        >
<Text style={{fontWeight:'bold', fontSize:22}}></Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
        style={{marginTop:20}}
        >
<Text style={{fontWeight:'bold', fontSize:22}}>Don't have an account?</Text>

        </TouchableOpacity>

    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center' ,
     marginTop:100,
    },
    textInput: {
    paddingTop: 20, paddingBottom: 10, width:400, fontSize:20, borderBottomWidth:1, borderBottomColor:'#000',
    marginBottomWidth:1,
    marginBottom:10,
    textAlign:'center'
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