// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBFEY_1gZrmUd14EdGVH-becx7muEoDx7E",
  authDomain: "dave-client-store.firebaseapp.com",
  projectId: "dave-client-store",
  storageBucket: "dave-client-store.firebasestorage.app",
  messagingSenderId: "295917531783",
  appId: "1:295917531783:web:0efa3384bef2f1dab7be22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage()