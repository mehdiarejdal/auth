
import { StyleSheet, View, ScrollView, FlatList,  } from 'react-native';
import CardProfesseur from '../Components/CardProfesseur.js';
import professeur from '../Arrays/professeur.js';




export default function Professeur() {
  return (
    
    <View style={styles.container}>

    <FlatList
      style={styles.list_container}
      data={professeur}
      renderItem={({item}) => 
      <CardProfesseur 
      name={item.name}
      sex={item.sex}
      nb_formation={item.nb_formation}
      nb_transaction={item.nb_transaction}
      sm_transaction={item.sm_transaction}
       />}
        />

    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
    flex:1
  },
  list_container: {
    borderColor: '#FF0000',
    //borderWidth: 2,
    //borderRadius:15,
    margin:'2%', 
    marginVertical:'4%',
    padding:'0%',
    paddingVertical:'0%', 
    flex:1
  }




  
});
