import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnYwJ14SIDMmIf62uz7aXLreP_fUsa99Q",
    authDomain: "linkedin-clone-4e92b.firebaseapp.com",
    projectId: "linkedin-clone-4e92b",
    storageBucket: "linkedin-clone-4e92b.appspot.com",
    messagingSenderId: "163627791621",
    appId: "1:163627791621:web:8cdc98652f4e2ae722736c"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db,auth};