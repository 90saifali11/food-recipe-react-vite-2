// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC5lNVH_j8e-72KPJn3bA4pPXhfGK5aPRs",
  authDomain: "first-project-e823d.firebaseapp.com",
  projectId: "first-project-e823d",
  storageBucket: "first-project-e823d.appspot.com",
  messagingSenderId: "1081021346640",
  appId: "1:1081021346640:web:d684c07f2d44c8bdfb7255",
  measurementId: "G-SM1DZ285MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exporting the auth, db, and storage
export { auth, db, storage };
