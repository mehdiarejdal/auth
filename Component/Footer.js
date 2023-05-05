import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    
      <View style={styles.footer}>
      <View style={styles.box} >
      <Image
        style={styles.img}
        source={require('../assets/bell.png')}
      />
      </View>
      <View style={[styles.box,{backgroundColor:'#151B22'}]}>
      <Image
        style={styles.img}
        source={require('../assets/home.png')}
      />
      </View>
      <View style={styles.box}>
      <Image
        style={styles.img}
        source={require('../assets/user.png')}
      />
      </View>
      <View style={styles.box}>
      <Image
        style={styles.img}
        source={require('../assets/settings.png')}
      />
      </View>

      </View>
    
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#344ABC',
    borderColor: '#0000FF',
    //borderWidth: 2,
    //borderBottomLeftRadius:30,
    //borderBottomRightRadius:30,
    flex: 1,
    flexDirection:'row',
    
  },
  box:{
    borderColor: '#FF0000',
    //borderWidth: 2,
    width:'25%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  t:{
    color:'white',
    fontSize:24,
  },
  img:{
    marginTop:'20%',
    width: '27%',
    height: '37%',
  }

});
