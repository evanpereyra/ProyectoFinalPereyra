// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByQmUC9f63ts3Tay9QERB52wNCSrKZFco",
  authDomain: "proyectofinalpereyrae.firebaseapp.com",
  projectId: "proyectofinalpereyrae",
  storageBucket: "proyectofinalpereyrae.firebasestorage.app",
  messagingSenderId: "778596018244",
  appId: "1:778596018244:web:f681677198ad700ef2b411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


