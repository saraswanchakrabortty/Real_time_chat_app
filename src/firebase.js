import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuYU5MfwClGp-VQ0K2O-a8vQIzQGUg25U",
  authDomain: "sudochat-51308.firebaseapp.com",
  projectId: "sudochat-51308",
  storageBucket: "sudochat-51308.appspot.com",
  messagingSenderId: "777847326832",
  appId: "1:777847326832:web:1e71c538d2209a049c0cb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();