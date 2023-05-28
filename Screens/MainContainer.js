
// import React from 'react';
// import { StyleSheet, View} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons'

// import Formation from './Formation.js';
// import AddCourses from './AddcoursesScreen.js';
// import Profile from './Profile.js';



// const Tab = createBottomTabNavigator();


// const MainContainer =()=> {
//   return (
//         <View style={styles.container}>
//         <NavigationContainer >
//         <Tab.Navigator 
        
//         initialRouteName='Formation'
//         screenOptions={
//             ({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Profile') {
//               iconName = focused
//                 ? 'speedometer'
//                 : 'speedometer-outline';
//             } else if (route.name === 'AddCourses') {
//               iconName = focused ? 'school' : 'school-outline';
//             } else if (route.name === 'Formation') {
//               iconName = focused ? 'library' : 'library-outline';
//             } 
            

//             return <Ionicons name={iconName} size={size} color={color} style={styles.icons}/>;
//           }
//         })
//         }
//         tabBarOptions={{
//           activeTintColor:"blue",
//           inactiveTintColor: 'gray',
//           labelStyle:{},
//         }}
//       > 
//           <Tab.Screen name="Profile" component={Profile} />
//           <Tab.Screen name="AddCourses" component={AddCourses} />
//           <Tab.Screen name="Formation" component={Formation} />
//         </Tab.Navigator>
//         </NavigationContainer>      
//         </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 11,
//     backgroundColor: '#fff',
    
//   },
//   scrollContainer: {
//     flex: 1,
//     width: '100%',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   icons:{

//   }
// });

// export default MainContainer;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import Formation from './Formation.js';
import MesFormations from './MesFormations';
import MesFormations2 from './MesFormations2';
//import AddCourses from './AddcoursesScreen.js';
import PlusCourse from './PlusCourse'
import Profile from './Profile.js';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Mes Formations"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Ajouter Cours') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Mes Formations') {
              iconName = focused ? 'library' : 'library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} style={styles.icons} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          labelStyle: {},
        }}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Ajouter Cours" component={PlusCourse} />
        <Tab.Screen name="Mes Formations" component={MesFormations2} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icons: {},
});

export default MainContainer;
