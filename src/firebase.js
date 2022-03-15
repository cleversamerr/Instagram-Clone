import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyADUZkrTbkcP7S4-LcTcA4_tOZsYryLyJM",
  authDomain: "samer-instagram.firebaseapp.com",
  projectId: "samer-instagram",
  storageBucket: "samer-instagram.appspot.com",
  messagingSenderId: "241221262231",
  appId: "1:241221262231:web:edc41ca5125d9fa3a882d2",
  measurementId: "G-BZYXB4HXB9",
};

initializeApp(config);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

const postsRef = collection(db, "posts");

export { auth, storage, postsRef };
