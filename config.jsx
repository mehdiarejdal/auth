// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/*
  apiKey: "AIzaSyCs_K5PvoyFLHbmEy5sVnwKKFvREET-gLc",
  authDomain: "testapp-92345.firebaseapp.com",
  databaseURL: "https://testapp-92345-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testapp-92345",
  storageBucket: "testapp-92345.appspot.com",
  messagingSenderId: "1026424862121",
  appId: "1:1026424862121:web:6fd553c4b175dece3d00b8"
*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBI4wXNQ3146xua6YTaKD2tyaw5cOcIkGY",
  authDomain: "test1-4c8e8.firebaseapp.com",
  databaseURL: "https://test1-4c8e8-default-rtdb.firebaseio.com",
  projectId: "test1-4c8e8",
  storageBucket: "test1-4c8e8.appspot.com",
  messagingSenderId: "485422994822",
  appId: "1:485422994822:web:a362dd7d0447ff5b650807",
  measurementId: "G-DNWKMDNM25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export function addProfesseur(nom,prenom,sex,pseudonyme,mdp) {
  
  const reference= ref(db,'/professeur');
  const newreference = push(reference);
  set(newreference,{
    "firstName":nom,
    "lastName":prenom,
    "email":pseudonyme,
    "password":mdp,
    "sex":sex,
    "course":null
    }
    )
}


export function getProfesseur() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/professeur')).then((snapshot) => {
    if (snapshot.exists()) {
      resolve(Object.values(snapshot.val()));
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}

export function getFormation() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/formation')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      resolve(Object.values(snapshot.val()));
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}

export function getFormationTotal() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/formation')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      resolve(Object.values(snapshot.val()).length);
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}
export function getEtudiantTotal() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/etudiant')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      resolve(Object.values(snapshot.val()).length);
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}

export function getProfesseurTotal() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/professeur')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      resolve(Object.values(snapshot.val()).length);
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}

export function getTransactionTotal() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/transaction')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      resolve(Object.values(snapshot.val()).length);
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}

/*
export function getFormation_EtudiantTotal() {
  return new Promise((resolve, reject) => {
  const dbRef = ref(db);
  
  get(child(dbRef, '/formation')).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log('G2',snapshot.val());
      d=Object.values(snapshot.val())
      snapshot.forEach(childSnapshot=>{
      
      })
      resolve(d);
    } else {
      console.log("No data available");
      resolve([]);
    }
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
  })
}
*/