// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCAIJkkLMF2no6waTa2ZAPmnLMOzzhFEc4",
  authDomain: "my-portfolio-64.firebaseapp.com",
  projectId: "my-portfolio-64",
  storageBucket: "my-portfolio-64.appspot.com",
  messagingSenderId: "951706751147",
  appId: "1:951706751147:web:7bb0ebbcee37302c5227ee",
  measurementId: "G-XPX6MR3QE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore and auth
const auth = getAuth(app);
const db = getFirestore(app);


export { db , auth };