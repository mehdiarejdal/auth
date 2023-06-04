
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';




export default function CardProfesseur(props) {

  const [showing,setShowing]=useState(false);
  

  function RightColor(sex){
    if(sex==='M'){
        return <Ionicons name="person-circle" size={58} color={'grey'} />;
      }
    else if (sex==='F'){
      return <Ionicons name="person-circle" size={58} color={'pink'} />;
    }
    
  };

  function click(){
    setShowing(!showing);
  }
  
  function icon(showing){
    if(showing===true){
      return  <Ionicons name="chevron-down-circle" size={38} color={'#4E6CFF'} />;
    }
    else{
     return <Ionicons name="chevron-back-circle-outline" size={38} color={'#4E6CFF'} />;
    }
  }

  function details(showing,nb_formation, nb_transaction){//(.. , sm_transaction)
    if(showing===true){
      return  <View style={styles.details}>
      
        <View style={styles.box}>
        <View style={styles.box_title}>
        <Text style={styles.box_title_text}> Formations</Text>
        </View>
        <View style={styles.box_value}>
        <Text style={styles.box_value_text}> {nb_formation}</Text>
        </View>
        </View>

        <View style={[styles.box, {borderLeftWidth:1,borderRightWidth:1, borderColor: 'white',}]}>
        <View style={styles.box_title}>
        <Text style={styles.box_title_text}>Total (Ventes)</Text>
        </View>
        <View style={styles.box_value}>
        <Text style={styles.box_value_text}> {nb_transaction}</Text>
        </View>
        </View>
        {/*
        <View style={styles.box}>
        <View style={styles.box_title}>
        <Text style={styles.box_title_text}>Total (MAD)</Text>
        </View>
        <View style={styles.box_value}>
        <Text style={styles.box_value_text}> {sm_transaction}</Text>
        </View>
        </View>
        */}

      </View>
    }
  }

  return (
      <View style={styles.container}>
      <Pressable style={styles.prof} onPress={click}>
      <View style={styles.icon1}>
      {RightColor(props.sex)}
      </View>
      <Text  style={styles.text_prof}>{props.name}</Text>
      <View style={styles.icon2} >
      {icon(showing)}
      </View>
      </Pressable>
      {details(showing, props.nb_formation, props.nb_transaction, props.sm_transaction)}
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginVertical:'1%',
    marginHorizontal:'3%',
    alignItems: 'center',
  },
  prof:{
    backgroundColor:'white',
    borderWidth:1.5,
    borderRadius:25,
    borderColor: '#4E6CFF',
    //paddingHorizontal:'0%',
    //flex: 1,
    flexDirection: 'row',
    //justifyContent:'center',
    alignItems: 'center',
    //width: '100%',
    height: 75,
},
details:{
  backgroundColor:'#4E6CFF',
  color:'white',
  //paddingHorizontal:'40%',
  width: '90%',
  borderBottomLeftRadius:14,
  borderBottomRightRadius:14,
  //borderWidth:1,
  borderColor:'#4E6CFF',
  flex: 1,
    flexDirection: 'row',
    //justifyContent:'space-evenly',
    alignItems: 'center',
    height: 135,
    //paddingRight:'1%'
},
box:{
 // borderWidth:1,
  width: '33.3%',
  height: '80%',
  flex:1,
  justifyContent:'center',
  alignItems: 'center',
  padding:'0%',
},
box_title:{
  //borderWidth:1,
  flex:2,
  justifyContent:'center',
},
box_title_text:{
color:'white',
fontWeight:'700',
  fontSize:16,
  textAlign:'center'

},
box_value:{
  //borderWidth:1,
  flex:3,
  justifyContent:'center',
},
box_value_text:{
  color:'white',
  fontWeight:'800',
  fontSize:42,
  textAlign:'center'
},

 

text_prof:{
  //borderWidth:1.5,
  flex: 3,
  fontSize:24,
  fontWeight:'700'
  //justifyContent:'center',
},
icon1:{
  //borderWidth:1.5,
  flex: 1,
  //justifyContent:'center',
  alignItems:'center',
},
icon2:{
  //borderWidth:1.5,
  flex: 1,
  //justifyContent:'center',
  alignItems:'center',
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
