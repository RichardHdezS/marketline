import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD9QFVE7MCfJdw_eJfyqq6r6LF4s_Y9r4s",
  authDomain: "ecommerce-app-with-reactjs.firebaseapp.com",
  projectId: "ecommerce-app-with-reactjs",
  storageBucket: "ecommerce-app-with-reactjs.appspot.com",
  messagingSenderId: "7984991930",
  appId: "1:7984991930:web:6215d067c7078019c9fc83",
  measurementId: "G-CX3NESJNTX"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}