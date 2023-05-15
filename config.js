import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 // firebase config 

 const firebaseConfig = {
    apiKey: "AIzaSyBI4wXNQ3146xua6YTaKD2tyaw5cOcIkGY",
    authDomain: "test1-4c8e8.firebaseapp.com",
    projectId: "test1-4c8e8",
    storageBucket: "test1-4c8e8.appspot.com",
    messagingSenderId: "485422994822",
    appId: "1:485422994822:web:690be3601f04ac78650807",
    measurementId: "G-FJVJD25B09"
 }

 if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }
 export { firebase};