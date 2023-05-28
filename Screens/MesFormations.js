import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CourseCard from '../Components/CourseCard';
import { database, firebase } from '../config';

const db = firebase.database(); // Use the Realtime Database instance

export default function Formation() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      try {
        const coursesRef = db.ref('courses');
        coursesRef.on('value', (snapshot) => {
          const coursesData = snapshot.val();
          if (coursesData) {
            const coursesArray = Object.values(coursesData);
            setCourses(coursesArray);
          } else {
            setCourses([]);
          }
        });
      } catch (error) {
        console.log('Error fetching courses:', error);
      }
    };

    fetchCourses();
    return () => {
      // Unsubscribe from the 'value' event when the component unmounts
      db.ref('courses').off('value');
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list_container}
        data={courses}
        renderItem={({ item }) => <CourseCard course={item} />}
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
