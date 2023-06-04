import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
//import { colors } from '../Constants';



const CourseCard = ({ course }) => {// somme des etudiants achetants une formation

const [showing,setShowing]=useState(false);
const nb_etudiant=course.formation? Object.keys(course.formation).length:0;

function click(){
  setShowing(!showing);
}

function icon(showing){
  if(showing===true){
    return  <Ionicons name="chevron-down-circle" size={38} color={'#4E6CFF'} />;
  }
  else{
   return <Ionicons name="chevron-back-circle-outline" size={38} color={'#4E6CFF'} />;
  }
}

function details(showing,duree, prix, etudiants){
  if(showing===true){
    return  <View style={styles.details}>
    
      <View style={styles.box}>
      <View style={styles.box_title}>
      <Text style={styles.box_title_text}>Durée </Text>
      </View>
      <View style={styles.box_value}>
      <Text style={styles.box_value_text}> {duree}</Text>
      </View>
      </View>

      <View style={[styles.box, {borderLeftWidth:1,borderRightWidth:1, borderColor: 'white',}]}>
      <View style={styles.box_title}>
      <Text style={styles.box_title_text}>Prix (MAD)</Text>
      </View>
      <View style={styles.box_value}>
      <Text style={styles.box_value_text}> {prix}</Text>
      </View>
      </View>

      <View style={styles.box}>
      <View style={styles.box_title}>
      <Text style={styles.box_title_text}>Achats</Text>
      </View>
      <View style={styles.box_value}>
      <Text style={styles.box_value_text}> {etudiants}</Text>
      </View>
      </View>

    </View>
  }
}


  return (
    <View style={styles.marge}>
    <Pressable style={styles.container} onPress={click}>
      <Image source={{ uri: course.imageURL }} style={styles.image} />
      <View style={styles.detailss}>
        <Text style={styles.title}>{course.titre}</Text>
        <Text style={styles.instructor}>{course.professeur}</Text>
      </View>
      <View style={styles.icon2} >
      {icon(showing)}
      </View>
      
    </Pressable>
    {details(showing, course.duree, course.prix, nb_etudiant)} 
    </View>
  );
}
const styles = StyleSheet.create({
  marge:{
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 45,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 17,
  },
  detailss: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
   
  },
  instructor: {
    color: '#999999',
    marginBottom: 8,
  },
  details:{
    alignSelf:'center',
    backgroundColor:'#4E6CFF',
    color:'white',
    //paddingHorizontal:'40%',
    width: '90%',
    borderBottomLeftRadius:14,
    borderBottomRightRadius:14,
    //borderWidth:3,
    borderColor:'#000000',
    flex: 1,
      flexDirection: 'row',
      //justifyContent:'space-evenly',
      alignItems: 'center',
      height: 135,
      //paddingRight:'1%'
  },
  box:{
    // borderWidth:1,
     width: '33.3%',
     height: '80%',
     flex:1,
     justifyContent:'center',
     alignItems: 'center',
     padding:'0%',
   },
   box_title:{
     //borderWidth:1,
     flex:2,
     justifyContent:'center',
   },
   box_title_text:{
   color:'white',
   fontWeight:'700',
     fontSize:16,
     textAlign:'center'
   
   },
   box_value:{
     //borderWidth:1,
     flex:3,
     justifyContent:'center',
   },
   box_value_text:{
     color:'white',
     fontWeight:'800',
     fontSize:42,
     textAlign:'center'
   },
   
   stat_label: {
    borderColor: 'yellow',
    borderWidth: 1,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height:'75%',
    paddingHorizontal:'5%',
  },

  stat_label_text:{
    fontSize: 24,
    fontWeight:'700',
    color:'white',

  },

  stat_value: {
    borderColor: 'orange',
    borderWidth: 1,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height:'50%',
    marginTop: '17%',
    //paddingLeft:'4%'
  },

  stat_value_text:{
    fontSize: 32,
    fontWeight:'700',
    color:'white',

  },
})



export default CourseCard;
