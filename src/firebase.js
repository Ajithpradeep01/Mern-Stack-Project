// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-project-23-24.firebaseapp.com",
  projectId: "mern-project-23-24",
  storageBucket: "mern-project-23-24.appspot.com",
  messagingSenderId: "986099010382",
  appId: "1:986099010382:web:cd9932ca19c91b007cac1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);