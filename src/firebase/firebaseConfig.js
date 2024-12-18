// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvIJqJs05i397eSaJrLa7IOHQN0cgWi0g",
  authDomain: "deliadmin-3f8db.firebaseapp.com",
  projectId: "deliadmin-3f8db",
  storageBucket: "deliadmin-3f8db.firebasestorage.app",
  messagingSenderId: "10839478956",
  appId: "1:10839478956:web:e1cdbf17a156e1dea14509",
  measurementId: "G-VK2ZKHNEND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };