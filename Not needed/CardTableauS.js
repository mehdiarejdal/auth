
import { StyleSheet, Text, View,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function CardTableauS(props) {
  return (
    
  <View style={styles.bloc}>
    <View style={styles.head}>
      <View >
      <Ionicons name={props.iconName} size={65} color={'white'} />
      </View>
      <View style={styles.title}>
      <Text style={styles.title_text}>d</Text>
      </View>
    </View>

    <View style={styles.value}>
      <Text style={styles.value_text}>{props.value}</Text>  
    </View>
    
    </View>
  

  );
}

const styles = StyleSheet.create({

  bloc:{
    borderColor: '#00FFFF',
    borderWidth: 4,
    flex:1,
    flexDirection:'column',
    backgroundColor:'#4E6CFF',
    borderRadius:15,
    margin:'2%', 
    marginVertical:'4%',
    padding:'4%',
    //paddingVertical:'0%', 
    
  },
  head:
  { flex:1, 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    borderColor: '#00FFFF',
    borderWidth: 4,
  
  },
  title:
  {
    borderColor: '#00FFFF',
    borderWidth: 4,
    alignSelf:'center', 
    paddingBottom:'13%'},
  title_text:
  {
    borderColor: '#00FFFF',
    borderWidth: 4,
    fontSize:25,
    fontWeight:'500', 
    color:'white',},
  value:{
    flex:1, 
    justifyContent:'center', 
    alignSelf:'flex-end'

  },
  value_text:{
    fontSize:42,
    fontWeight:'800', 
    color:'white',
  }

});
