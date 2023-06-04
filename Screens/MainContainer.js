
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import Formation from './Formation.js';
import Professeur from './Professeur.js';
import TableauDeBord from './TableauDeBord.js';
import addProfesseur from './addProfesseur.js';
import Profil from './Profil.js';


const Tab = createBottomTabNavigator();


const MainContainer =()=> {
  return (
        <View style={styles.container}>
        <NavigationContainer >
        <Tab.Navigator 
        
        initialRouteName='Formation'
        screenOptions={
            ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tableau De Bord') {
              iconName = focused
                ? 'speedometer'
                : 'speedometer-outline';
            } else if (route.name === 'Formations') {
              iconName = focused ? 'library' : 'library-outline';
            }  else if (route.name === 'Professeurs') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Ajout Professeur') {
              iconName = focused ? 'add' : 'add-outline';
            } /*else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }*/
            

            return <Ionicons name={iconName} size={size} color={color} style={styles.icons}/>;
          }
        })
        }
        tabBarOptions={{
          activeTintColor:"blue",
          inactiveTintColor: 'gray',
          labelStyle:{},
        }}
      > 
          <Tab.Screen name="Tableau De Bord" component={TableauDeBord} />
          <Tab.Screen name="Formations" component={Formation} />
          <Tab.Screen name="Professeurs" component={Professeur} />
          <Tab.Screen name="Ajout Professeur" component={addProfesseur} />
          {/*<Tab.Screen name="Profil" component={Profil} />*/}
        </Tab.Navigator>
        </NavigationContainer>      
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 11,
    backgroundColor: '#fff',
    
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icons:{

  }
});

export default MainContainer;
