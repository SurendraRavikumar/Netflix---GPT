// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePYn_hEZnLt5hOMCfbpUhuGJb3FwSuI4",
  authDomain: "netflixgpt-258c2.firebaseapp.com",
  projectId: "netflixgpt-258c2",
  storageBucket: "netflixgpt-258c2.firebasestorage.app",
  messagingSenderId: "82239426972",
  appId: "1:82239426972:web:65710f878b616d3faff859",
  measurementId: "G-X6R4MWXCMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();   // defining the getAuth() API here in auth variable