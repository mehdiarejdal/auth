
import { StyleSheet, View, ScrollView, FlatList,  } from 'react-native';
import course from '../Arrays/course.js';
import CourseCard from '../Components/CourseCard.js';



export default function Formation() {
  return (
    
    <View style={styles.container}>

    <FlatList
      style={styles.list_container}
      data={course}
      renderItem={({item}) => <CourseCard  course={item} />}
        />

    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
  },
  list_container: {
    borderColor: '#FF0000',
    //borderWidth: 2,
    margin:'2%', 
    marginVertical:'4%',
    padding:'2%',
    paddingVertical:'0%', 
    
  }




  
});
