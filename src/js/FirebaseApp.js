// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCso-_MGSAizXWu2PytFbnGj0QsnDwn58Q",
  authDomain: "roomates-16eca.firebaseapp.com",
  projectId: "roomates-16eca",
  storageBucket: "roomates-16eca.appspot.com",
  messagingSenderId: "993675188222",
  appId: "1:993675188222:web:478606916cdc5615cc92af",
  measurementId: "G-J4P2LSEHP7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
