import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Component/Header.js';
import Statistic from './Component/Statistic.js';
import Footer from './Component/Footer.js';


export default function App() {
  return (
    
    <View style={styles.container}>
    <StatusBar style="auto" hideTransitionAnimation='fade' hidden={false} />
    <Header />

    <View style={styles.body}>
      <ScrollView 
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      bounces={false}
      directionalLockEnabled={true}>
      
          <Statistic info="Formations" value={30} />
          <Statistic info="Professeurs" value={10} />
          <Statistic info="Etudiants" value={300} />
          
        </ScrollView>
    </View>
    
    <Footer/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151B22',
    flex: 1,
    borderColor: '#FFFFFF',
    //borderWidth: 2,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    marginTop: '7%',
    //paddingHorizontal: '3%',
    flexDirection: 'column',
    justifyContent:'flex-start',
  },
 
  body: {
    borderColor: '#00FF00',
    borderWidth: 0,
    margin:0,
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: '2%',
    paddingTop: '6%',
  },







  
});
