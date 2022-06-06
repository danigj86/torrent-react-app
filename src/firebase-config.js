// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdLr6AVMmwAWNUYytZA43I5XMNCOIVgjg",
  authDomain: "torrent-react-app.firebaseapp.com",
  projectId: "torrent-react-app",
  storageBucket: "torrent-react-app.appspot.com",
  messagingSenderId: "598506170519",
  appId: "1:598506170519:web:99d6cc447a468e7fd1e1d2",
  measurementId: "G-DVE4VWZQS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();
export const db = getFirestore(app);
