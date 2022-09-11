import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDWsT16khO01QIw_Bmf4OC8xsKNuyPn0E",
    authDomain: "capital-a2b4b.firebaseapp.com",
    projectId: "capital-a2b4b",
    storageBucket: "capital-a2b4b.appspot.com",
    messagingSenderId: "566009073645",
    appId: "1:566009073645:web:62b34bf8e6df31567ba1e4",
    measurementId: "G-M1ZGYJCRC1"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };