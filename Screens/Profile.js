
// // import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
// // import CardTableau from '../Components/CardTableau.js';
// // import tableaudebord from '../Arrays/tableaudebord.js';
// // import { Ionicons } from '@expo/vector-icons';





// // export default function Profile() {
// //   return (
    
// //     <View style={styles.container}>
// //     <View style={styles.ligne}>
    
// //     <CardTableau iconName="school-outline" info='Professeurs' value={30}/>
// //     <CardTableau iconName="people-circle-outline" info='Etudiants' value={300}/>
    

// //     </View>

// //     <View style={styles.ligne}>
// //     <CardTableau iconName="library" info='Formations' value={30}/>
// //     <CardTableau iconName="library" info='Ventes' value={30}/>

// //     </View>

// //     <View style={styles.ligne}>
    
// //     <CardTableau iconName="logo-usd" info='Somme des ventes (DHS)' value={300}/>

// //     </View>
   

// //     </View>
    
    
// //   );
// // }



// // const styles = StyleSheet.create({
  

// //   container: {
// //     borderColor: '#00FF00',
// //     //borderWidth: 2,
// //     flex:1,
// //   },
  
// //   ligne:{
// //     borderColor: '#0000FF',
// //     //borderWidth: 2,
// //     flex:2,
// //     flexDirection:'row',
// //     alignItems:'center'
// //   },
// //   ligneS:{
// //     borderColor: '#0000FF',
// //     //borderWidth: 2,
// //     flex:2,
// //     flexDirection:'row',
// //     alignItems:'center'
// //   },
  



  
// // });

// import React, { useState, useEffect  } from 'react';
// import { StyleSheet,Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// export default function Profile() {
//   const [name, setName] =useState('')

//     useEffect(() => {
//       firebase.firestore().collection ('users')
//     .doc(firebase.auth().currentUser.uid).get()
//     .then((snapshot)=> {
//     if(snapshot.exists){
//     setName(snapshot.data())
//     }
//     else {
//       console.log('User does not exist')
//     }
//   })
//     }, [])
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   // const handleChangePassword = () => {
//   //   // Add your logic to handle password change here
//   //   if (currentPassword && newPassword) {
//   //     // Perform password change operation
//   //     //Alert.alert('Password Changed', 'Your password has been successfully changed.');
//   //     setCurrentPassword('');
//   //     setNewPassword('');
//   //   } else {
//   //     Alert.alert('Error', 'Please enter both current and new passwords.');
//   //   }
//   // };


//   const create = () => {
//     update(ref(db, 'users/' + currentPassword), {
//       currentPassword: currentPassword,
//       newPassword: newPassword,
    
//     })
//       .then(() => {
//         alert('Password Changed', 'Your password has been successfully changed.');
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }; 

  

//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:20, fontWeight:'bold'}}>
//     Hello, {name.firstname}
//   </Text>
//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Current Password"
//           secureTextEntry
//           value={currentPassword}
//           onChangeText={setCurrentPassword}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="New Password"
//           secureTextEntry
//           value={newPassword}
//           onChangeText={setNewPassword}
//         />
//         <Button title="Change Password" onPress={create} />
//       </View>
//       {/* <Button title="Logout" onPress={handleLogout} /> */}
//       <TouchableOpacity 
//   onPress={()=> {firebase.auth().signOut()}}
//     style={styles.button}ù33
//   >
//     <Text style={{fontWeight:'bold', fontSize:22}}>Sign out</Text>
//   </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   form: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { firebase } from '../config'; // Import firebase from your config.js file

export default function Profile() {
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setName(snapshot.data().firstname);
          } else {
            console.log('User does not exist');
          }
        })
        .catch((error) => {
          console.log('Error retrieving user data:', error);
        });
    }
  }, []);

  const handleChangePassword = () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser && currentPassword && newPassword) {
      const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword);
      currentUser
        .reauthenticateWithCredential(credential)
        .then(() => {
          currentUser
            .updatePassword(newPassword)
            .then(() => {
              console.log('Password changed successfully.');
              setCurrentPassword('');
              setNewPassword('');
            })
            .catch((error) => {
              console.log('Error changing password:', error);
            });
        })
        .catch((error) => {
          console.log('Error reauthenticating user:', error);
        });
    } else {
      console.log('Please enter both current and new passwords.');
    }
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello, {name}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Button title="Change Password" onPress={handleChangePassword} />
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: '#026efd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
