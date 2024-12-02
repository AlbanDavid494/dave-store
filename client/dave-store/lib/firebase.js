// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9XdqcvxLBB_EKNp40o_smm7IGpJ9Vih4",
  authDomain: "e-store-18669.firebaseapp.com",
  projectId: "e-store-18669",
  storageBucket: "e-store-18669.firebasestorage.app",
  messagingSenderId: "621516285810",
  appId: "1:621516285810:web:9e9aa641fae5c2248a1feb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage()