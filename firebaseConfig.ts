// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn2hvyeVjOwXErF8KXGyDBk6AVcdHztKM",
  authDomain: "rn-favmovies.firebaseapp.com",
  projectId: "rn-favmovies",
  storageBucket: "rn-favmovies.appspot.com",
  messagingSenderId: "875995208009",
  appId: "1:875995208009:web:34d5ebef7f7902dcb6a298",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTOE_DB = getFirestore(FIREBASE_APP);