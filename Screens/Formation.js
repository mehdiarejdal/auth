import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CourseCard from '../Components/CourseCard';
import { database, firebase } from '../config';

const db = firebase.firestore();

export default function Formation() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await db.collection('courses').get();
        const coursesData = snapshot.docs.map((doc) => doc.data());
        setCourses(coursesData);
      } catch (error) {
        console.log('Error fetching courses:', error);
      }
    };

    fetchCourses();
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
    // borderWidth: 2,
  },
  list_container: {
    flex: 1,
    borderColor: '#FF0000',
    // borderWidth: 2,
    margin: '2%',
    marginVertical: '4%',
    padding: '2%',
    paddingVertical: '0%',
  },
});
