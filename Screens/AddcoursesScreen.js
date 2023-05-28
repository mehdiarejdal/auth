import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ref, set, onValue, remove } from 'firebase/database';
import { database } from '../config';

export default function AddCoursesScreen() {
  const [title, setTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState('');
  const [image, setImage] = useState('');

  const create = () => {
    set(ref(database, 'courses/' + title), {
      title: title,
      instructor: instructor,
      duration: duration,
      image: image,
    })
      .then(() => {
        alert('Data updated');
      })
      .catch((error) => {
        alert(error);
      });
  };

  function readData() {
    const starCountRef = ref(database, 'courses/' + title);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setTitle(data.title);
        setInstructor(data.instructor);
        setDuration(data.duration);
        setImage(data.image);
      } else {
        setTitle('Data not found');
      }
    }, {
      onlyOnce: true // Add this option to retrieve the data only once
    });
  }

  function deleteData() {
    remove(ref(database, 'courses/' + title))
      .then(() => {
        alert('Data removed');
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Add a Course</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructor"
        value={instructor}
        onChangeText={(text) => setInstructor(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Image"
        value={image}
        onChangeText={(text) => setImage(text)}
        style={styles.input}
      />

      <Button title="Submit Data" onPress={create} />
      <Button title="Read Data" onPress={readData} />
      <Button title="Delete Data" onPress={deleteData} />

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
});
