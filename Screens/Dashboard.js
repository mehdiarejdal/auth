import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Header from '../Components/Header.js';
import Statistic from '../Components/Statistic.js';
import Footer from '../Components/Footer.js';


const data = [
  {info:"Formations", value:30},
  {info:"Professeurs", value:10},
  {info:"Etudiants", value:300}

];

const renderItem = ({ item }) => {
  return <Text style={[styles.flat, {color:'white'}]}>{item.title}</Text>;
};


export default function Dashboard() {
  return (
    
    <SafeAreaView style={styles.container}>
    <StatusBar style="light" hideTransitionAnimation='fade' hidden={false} />
    <Header />

    <View style={styles.body}>

    {/*
      <ScrollView 
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      bounces={false}
      directionalLockEnabled={true}>
      
          <Statistic info="Formations" value={30} />
          <Statistic info="Professeurs" value={10} />
          <Statistic info="Etudiants" value={300} />
          <Statistic info="Formations" value={30} />
          <Statistic info="Professeurs" value={10} />
          <Statistic info="Etudiants" value={300} />

        </ScrollView> */}

    <FlatList
          data={data}
          renderItem={({item}) => <Statistic info={item.info} value={item.value}/>}
        />

    </View>
    
    <Footer/>
    </SafeAreaView>
    
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
    //paddingHorizontal: '3%',
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

  flat:{
    fontSize:20
  }





  
});
