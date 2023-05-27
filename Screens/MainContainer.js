
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import Formation from './Formation.js';
import AddCourses from './AddcoursesScreen.js';
import Profile from './Profile.js';



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

            if (route.name === 'Profile') {
              iconName = focused
                ? 'speedometer'
                : 'speedometer-outline';
            } else if (route.name === 'AddCourses') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Formation') {
              iconName = focused ? 'library' : 'library-outline';
            } 
            

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
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="AddCourses" component={AddCourses} />
          <Tab.Screen name="Formation" component={Formation} />
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
