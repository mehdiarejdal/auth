import { Text, View ,StyleSheet} from "react-native";
import React from 'react';

//import { Header } from "react-native/Libraries/NewAppScreen";
// import { styles } from "./Login";
const Header = () => {
    return (
        <View style={styles.container}>
      <Text>Header</Text>
   
    </View>
    )
}
export default Header
const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center' ,
     marginTop:100,
    },
    textInput: {
    paddingTop: 20, paddingBottom: 10, width:400, fontSize:20, borderBottomWidth:1, borderBottomColor:'#000',
    marginBottomWidth:1,
    marginBottom:10,
    textAlign:'center'
},
image: {
  marginBottom: 30,
  width: 130, height: 150
},
button:{
  marginTop:50,
  height:70,
  width:250,
  backgroundColor:'#026efd',
  alignItems:"center",
  justifyContent:'center',
  borderRadius:50,

}
})