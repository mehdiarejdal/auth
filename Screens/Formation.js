
import { StyleSheet, View, ScrollView, FlatList,  } from 'react-native';
import CardTableau from '../Components/CardTableau.js';
import tableaudebord from '../Arrays/tableaudebord.js';




export default function Formation() {
  return (
    
    <View style={styles.container}>

    <FlatList
      style={styles.list_container}
      data={tableaudebord}
      renderItem={({item}) => <CardTableau info={item.info} value={item.value}/>}
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
