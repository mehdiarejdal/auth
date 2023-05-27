// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4wXNQ3146xua6YTaKD2tyaw5cOcIkGY",
  authDomain: "test1-4c8e8.firebaseapp.com",
  projectId: "test1-4c8e8",
  storageBucket: "test1-4c8e8.appspot.com",
  messagingSenderId: "485422994822",
  appId: "1:485422994822:web:8ce62d1fd6f8d0e8650807",
  measurementId: "G-77YT3C0PZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//init database

export const db = getDatabase(app);