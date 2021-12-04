// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnpiGGtxahJh_vmTgJ_zbVtmhgNwDfkqU",
  authDomain: "clone-227da.firebaseapp.com",
  projectId: "clone-227da",
  storageBucket: "clone-227da.appspot.com",
  messagingSenderId: "820415986588",
  appId: "1:820415986588:web:ae891ca14acb5859212659",
  measurementId: "G-GMMRYKRZ83"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default {
    db,
    auth
}