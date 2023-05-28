import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CourseCard from '../Components/CourseCard';
import { database, firebase } from '../config';

const db = firebase.database(); // Use the Realtime Database instance

export default function Formation() {
  const [formation, setFormation] = useState([]);

  useEffect(() => {
    const fetchFormation = () => {
      try {
        const formationRef = db.ref('formation');
        formationRef.on('value', (snapshot) => {
          const formationData = snapshot.val();
          if (formationData) {
            const formationArray = Object.values(formationData);
            setFormation(formationArray);
          } else {
            setFormation([]);
          }
        });
      } catch (error) {
        console.log('Error fetching formation:', error);
      }
    };

    fetchFormation();
    return () => {
      // Unsubscribe from the 'value' event when the component unmounts
      db.ref('formation').off('value');
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
  style={styles.list_container}
  data={formation}
  renderItem={({ item }) => <CourseCard formation={item} />} // Update prop name to 'formation'
  keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#00FF00',
  },
  list_container: {
    flex: 1,
    borderColor: '#FF0000',
    margin: '2%',
    marginVertical: '4%',
    padding: '2%',
    paddingVertical: '0%',
  },
});
