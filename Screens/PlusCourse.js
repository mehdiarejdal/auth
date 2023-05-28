import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ref, set, onValue, remove, push  } from 'firebase/database';
import { database } from '../config';

export default function PlusCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState('');
  const [instructor, setInstructor] = useState('');

  const create = () => {
    const formationRef = ref(database, 'formation');
    const newFormationRef = push(formationRef);

    set(newFormationRef, {
      titre: title,
      description: description,
      duree: duration,
      imageURL: imageURL,
      prix: price,
      professeur: instructor,
      etudiant: {}
    })
      .then(() => {
        alert('Data updated');
      })
      .catch((error) => {
        alert(error);
      });
  };

  function readData() {
    const formationRef = ref(database, 'formation' + title);
    onValue(formationRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const formationKeys = Object.keys(data);
        const firstFormationKey = formationKeys[0];

        setTitle(data[firstFormationKey].titre);
        setDescription(data[firstFormationKey].description);
        setDuration(data[firstFormationKey].duree);
        setImageURL(data[firstFormationKey].imageURL);
        setPrice(data[firstFormationKey].prix);
        setInstructor(data[firstFormationKey].professeur);
      } else {
        setTitle('Data not found');
      }
    }, {
      onlyOnce: true // Add this option to retrieve the data only once
    });
  }

  function deleteData() {
    const formationRef = ref(database, 'formation' + + title);
    remove(formationRef)
      .then(() => {
        alert('Data removed');
      })
      .catch((error) => {
        alert(error);
      });
  }


  return (
    <View style={styles.container}>
      <Text></Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructor"
        value={instructor}
        onChangeText={(text) => setInstructor(text)}
        style={styles.input}
      />

<TouchableOpacity style={styles.button} onPress={create}>
        <Text style={styles.buttonText}>Submit Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={readData}>
        <Text style={styles.buttonText}>Read Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={deleteData}>
        <Text style={styles.buttonText}>Delete Data</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
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
});
