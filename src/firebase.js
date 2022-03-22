import firebase from "firebase";

const config = {
  apiKey: "AIzaSyADUZkrTbkcP7S4-LcTcA4_tOZsYryLyJM",
  authDomain: "samer-instagram.firebaseapp.com",
  projectId: "samer-instagram",
  storageBucket: "samer-instagram.appspot.com",
  messagingSenderId: "241221262231",
  appId: "1:241221262231:web:edc41ca5125d9fa3a882d2",
  measurementId: "G-BZYXB4HXB9",
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
