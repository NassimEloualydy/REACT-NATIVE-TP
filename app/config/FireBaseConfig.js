// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKExQ3-0P9328AwDUzm9-D2u-Aw2Iciyk",
  authDomain: "reactnative-ecom-app.firebaseapp.com",
  projectId: "reactnative-ecom-app",
  storageBucket: "reactnative-ecom-app.appspot.com",
  messagingSenderId: "17934261816",
  appId: "1:17934261816:web:e0d20ade2489b5fb0a10cd",
  measurementId: "G-Y9L09KWP77"
};

// Initialize Firebase
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIRE_BASE_AUTH=getAuth(app)
export const FIRESTORE_DB=getFirestore(app);
