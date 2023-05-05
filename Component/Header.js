import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
<View style={styles.header}>
    <Text style={styles.title}>Dashboard</Text>
</View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000',
    borderColor: '#FF0000',
    borderWidth: 0,
    flex: 1,
    
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: '4%',
    
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
  },
})