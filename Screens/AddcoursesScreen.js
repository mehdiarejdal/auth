
import { StyleSheet, View, ScrollView, FlatList, Text, TextInput , Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CardProfesseur from '../Components/CardProfesseur.js';
import AddCourses from '../Arrays/professeur.js';
import React, { useState } from 'react';
import { ref, set, update, onValue, remove  } from 'firebase/database';
import { db } from '../config.js';




export default function AddCoursesScreen() {
  const [title, setTitle] = useState('');
  const [timing, setTiming] = useState('');
  const [numberChapters, setNumberChapters] = useState('');
  const [rating, setRating] = useState('');
  const [URL, setURL] = useState('');

  const create = () => {
    update(ref(db, 'courses/' + title), {
      title: title,
      timing: timing,
      numberChapters: numberChapters,
      rating: rating,
      URL: URL,
    })
      .then(() => {
        alert('Data updated');
      })
      .catch((error) => {
        alert(error);
      });
  };
  function readData() {
    const starCountRef = ref(db, 'courses/' + title);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
  
      if (data) {
        setTitle(data.title);
        setTiming(data.timing);
        setNumberChapters(data.numberChapters);
        setRating(data.rating);
        setURL(data.URL);
      } else {
        // Handle the case when the data is null or doesn't exist
        // For example, you can display an error message or set a default value
        setTitle('Data not found');
      }
    });
    
    
  }
  function deleteData() {
     remove(ref(db, 'courses/' + title));
     alert('removed') ; 
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
        placeholder="Timing"
        value={timing}
        onChangeText={(text) => setTiming(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Number of Chapters"
        value={numberChapters}
        onChangeText={(text) => setNumberChapters(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Rating"
        value={rating}
        onChangeText={(text) => setRating(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="URL"
        value={URL}
        onChangeText={(text) => setURL(text)}
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