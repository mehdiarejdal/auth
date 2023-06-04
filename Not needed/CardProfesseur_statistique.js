
import { Alert, Pressable, StyleSheet, Text, View,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function RightColor(sex){
  if(sex==='M'){
      return <Ionicons name="person-circle" size={58} color={'grey'} />;
    }
  else if (sex==='F'){
    return <Ionicons name="person-circle" size={58} color={'pink'} />;
  }
  
};

export default function CardProfesseur_statistique(props) {
  return (
    
      <View style={styles.container} >
      <View style={styles.icon1}>
      {RightColor(props.sex)}
      </View>
      <Text  style={styles.text}>{props.name}</Text>
      <Pressable style={styles.icon2} >
      <Ionicons onPress={()=>{Alert.alert("hi")}} name="chevron-back-circle-outline" size={38} color={'#4E6CFF'} />
      </Pressable>
      </View>
      
  

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderWidth:1.5,
    borderRadius:25,
    borderColor: '#4E6CFF',
    marginVertical:'1%',
    marginHorizontal:'3%',
    paddingHorizontal:'0%',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    //width: '100%',
    height: 75,
    maxHeight:75,
},
 

text:{
  //borderWidth:1.5,
  flex: 3,
  fontSize:24,
  fontWeight:'700'
  //justifyContent:'center',
},
icon1:{
  //borderWidth:1.5,
  flex: 1,
  //justifyContent:'center',
  alignItems:'center',
},
icon2:{
  //borderWidth:1.5,
  flex: 1,
  //justifyContent:'center',
  alignItems:'center',
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
/*
  stat_value: {
    borderColor: 'orange',
    borderWidth: 1,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:20,
    padding: '2%',
    paddingTop: '12%',
    paddingBottom: '16%',
    marginTop:'1%'
  },
  stat_value_text:{
    fontSize: 32,
    fontWeight:'600',
    color:'black',
  },
*/
});
