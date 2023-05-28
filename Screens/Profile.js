import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Image } from 'react-native';
import { firebase } from '../config';

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
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -10 }}>Hello, {name}</Text>
      </View>
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
        <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.buttonText}>Sign Out</Text>
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
  changePasswordButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
    width:100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
