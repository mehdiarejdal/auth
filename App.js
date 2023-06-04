
import React from 'react';
import { SafeAreaView,  StyleSheet, StatusBar, View} from 'react-native';

import MainContainer from './Screens/MainContainer';
import Header from './Components/Header.js';



const App =()=> {
  return (
   
    
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" hideTransitionAnimation='fade' hidden={false} />
        <Header />
        <MainContainer /> 

      </SafeAreaView>
      
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'orange',
    borderWidth:4,
    
  },
  container: {
    flex: 1,
  },

  mainContainer: {
    flex: 5,
    
  },
  
});

export default App;
