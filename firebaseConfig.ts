// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Add this import for Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVFDvpjUyfcPwIWc8ssLvzOUNaBlisiNE",
  authDomain: "foodap-7ff19.firebaseapp.com",
  projectId: "foodap-7ff19",
  storageBucket: "foodap-7ff19.appspot.com",
  messagingSenderId: "861239619468",
  appId: "1:861239619468:web:1e61c4fc2d80c82ac530a9",
  measurementId: "G-6XMS9MXF6Y"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP); // Firestore
export const database = getDatabase(FIREBASE_APP); // Realtime Database
