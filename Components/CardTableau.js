
import { StyleSheet, Text, View,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function CardTableau(props) {
  return (
    
  <View style={styles.bloc}>
    <View style={styles.head}>
      <View >
      <Ionicons name={props.iconName} size={45} color={'white'} />
      </View>
      <View style={styles.title}>
      <Text style={styles.title_text}>{props.info}</Text>
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
    //borderWidth: 4,
    flex:1,
    flexDirection:'column',
    padding:'4%',
    margin:'3%',
    backgroundColor:'#4E6CFF',
    borderRadius:15
    

  },
  head:
  { flex:1, 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'},
  title:
  {alignSelf:'center', 
    paddingBottom:'13%'},
  title_text:
  {fontSize:17,
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
