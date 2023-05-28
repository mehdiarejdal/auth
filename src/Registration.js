// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { firebase } from '../config';

// const Registration = () => {
//   const [role, setRole] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');

//   const registerUser = async (email, role, password, firstname, lastname) => {
//     if (password.length < 6) {
//       alert('Password should be at least 6 characters');
//       return;
//     }

//     await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         firebase
//           .auth()
//           .currentUser.sendEmailVerification({
//             handleCodeInApp: true,
//             url: 'https://test1-4c8e8.firebaseapp.com',
//           })
//           .then(() => {
//             alert('Verification email sent');
//           })
//           .catch((error) => {
//             alert(error.message);
//           });

//         firebase
//           .firestore()
//           .collection('users')
//           .doc(firebase.auth().currentUser.uid)
//           .set({
//             firstname,
//             lastname,
//             email,
//             role,
//           })
//           .catch((error) => {
//             alert(error.message);
//           });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require('./LOGO.png')} />
//       <Text style={{ fontWeight: 'bold', fontSize: 23 }}>REGISTER HERE!</Text>
//       <View style={{ marginTop: 40 }}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="First Name"
//           onChangeText={(text) => setFirstName(text)}
//           autoCorrect={false}
//         />
//         <TextInput
//           style={styles.textInput}
//           placeholder="Last Name"
//           onChangeText={(text) => setLastName(text)}
//           autoCorrect={false}
//         />
//         <TextInput
//           style={styles.textInput}
//           value={email}
//           placeholder="Email"
//           onChangeText={(text) => setEmail(text)}
//           autoCorrect={false}
//           keyboardType="email-address"
//         />
//         <TextInput
//           style={styles.textInput}
//           placeholder="Etudiant/Professeur"
//           onChangeText={(text) => setRole(text)}
//           autoCorrect={false}
//         />
//         <TextInput
//           style={styles.textInput}
//           value={password}
//           placeholder="Password"
//           onChangeText={(password) => setPassword(password)}
//           secureTextEntry={true}
//           autoCorrect={false}
//         />
//       </View>
//       <TouchableOpacity onPress={() => registerUser(email, password, firstname, lastname, role)} style={styles.button}>
//         <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Registration;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   textInput: {
//     paddingTop: 20,
//     paddingBottom: 10,
//     width: 400,
//     fontSize: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   image: {
//     marginBottom: 0,
//     width: 160,
//     height: 150,
//   },
//   button: {
//     marginTop: 50,
//     height: 50,
//     width: 250,
//     backgroundColor: '#026efd',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//   },
// });
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';

const Registration = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();

  const registerUser = async () => {
    if (password.length < 6) {
      alert('Password should be at least 6 characters');
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const user = firebase.auth().currentUser;
      if (user) {
        await user.sendEmailVerification({
          handleCodeInApp: true,
          url: 'https://test1-4c8e8.firebaseapp.com',
        });
        alert('Verification email sent');
      }

      await firebase.firestore().collection('users').doc(user.uid).set({
        firstName,
        lastName,
        email,
        role,
      });

      // Resetting the form fields
      setRole('');
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');

      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/LOGO2.png')} />
      <Text style={styles.headerText}>REGISTER HERE!</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Etudiant/Professeur"
          value={role}
          onChangeText={(text) => setRole(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity onPress={registerUser} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.linkButton}>
        <Text style={styles.linkText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;

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
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 20,
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
  linkButton: {
    marginTop: 20,
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
