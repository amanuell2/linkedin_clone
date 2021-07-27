// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT2jRIGJ6kmMobil-2yx5XJ6dfyYBjr8U",
  authDomain: "linkedin-clone-9949c.firebaseapp.com",
  projectId: "linkedin-clone-9949c",
  storageBucket: "linkedin-clone-9949c.appspot.com",
  messagingSenderId: "463929388083",
  appId: "1:463929388083:web:006b227a35852202a6c746",
  measurementId: "G-80TLCEPQ56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
