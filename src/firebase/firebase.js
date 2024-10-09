// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jGaJOkax2gbQCEikLXSzs6tUEAFJPKY",
  authDomain: "expenses-tracker-db69a.firebaseapp.com",
  projectId: "expenses-tracker-db69a",
  storageBucket: "expenses-tracker-db69a.appspot.com",
  messagingSenderId: "80214189585",
  appId: "1:80214189585:web:deb30c3bc743ee821033b0",
  measurementId: "G-ZYMWB4ZHRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth      = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)