
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import CardTableau from '../Components/CardTableau.js';
import tableaudebord from '../Arrays/tableaudebord.js';
import { Ionicons } from '@expo/vector-icons';





export default function TableauDeBord() {
  return (
    
    <View style={styles.container}>
    <View style={styles.ligne}>
    
    <CardTableau iconName="school-outline" info='Professeurs' value={30}/>
    <CardTableau iconName="people-circle-outline" info='Etudiants' value={300}/>
    

    </View>

    <View style={styles.ligne}>
    <CardTableau iconName="library" info='Formations' value={30}/>
    <CardTableau iconName="library" info='Ventes' value={30}/>

    </View>

    <View style={styles.ligne}>
    
    <CardTableau iconName="logo-usd" info='Somme des ventes (DHS)' value={300}/>

    </View>
   

    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
    flex:1,
  },
  
  ligne:{
    borderColor: '#0000FF',
    //borderWidth: 2,
    flex:2,
    flexDirection:'row',
    alignItems:'center'
  },
  ligneS:{
    borderColor: '#0000FF',
    //borderWidth: 2,
    flex:2,
    flexDirection:'row',
    alignItems:'center'
  },
  



  
});
