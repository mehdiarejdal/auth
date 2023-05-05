
import { StyleSheet, Text, View,  } from 'react-native';
import Gradient from './Gradient';

export default function Statistic(props) {
  return (
    
      <View style={styles.stat_component}>
      
      <Gradient/>
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


  stat_component: {
    //backgroundColor:'#D9D9D9',
    borderColor: '#000000',
    borderWidth: 5,
    borderRadius:16,
    margin:'2%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 330,
    height: 140,

  },
  
  stat_label: {
    borderColor: 'yellow',
    //borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:90,
    padding: '3%',
    paddingLeft:'4%'
  },

  stat_label_text:{
    fontSize: 24,
    fontWeight:'700',
    color:'white',

  },

  stat_value: {
    borderColor: 'orange',
    //borderWidth: 1,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:90,
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
