
import { StyleSheet, Text, View,  } from 'react-native';
import Gradient from './Gradient';

export default function CardTableau(props) {
  return (
    
  
      <View style={styles.stat_component}>
        <View style={styles.stat_label}>
          <Text style={styles.stat_label_text}>Total des {props.info}:</Text>
        </View>
        <View style={styles.stat_value}>
          <Text style={styles.stat_value_text}>{props.value}</Text>
        </View>
      </View>
  

  );
}

const styles = StyleSheet.create({


  container:{
    padding:5,
  borderWidth:6,
  borderRadius:15,
  borderColor: '#FF0000',
  padding:0,

},
  stat_component: {
    backgroundColor:'lightblue',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius:16,
    marginVertical:'1%',
    marginHorizontal:'3%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '90%',
    height: 145,

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
