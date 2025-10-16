

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATt-dKO566zzOFWcNoP-RwQFj69LnY1HY",
  authDomain: "proitect-odobelcu.firebaseapp.com",
  projectId: "proitect-odobelcu",
  storageBucket: "proitect-odobelcu.firebasestorage.app",
  messagingSenderId: "1003333121505",
  appId: "1:1003333121505:web:6ed6d106d43a82e1e18ea0",
  measurementId: "G-71VX4VDELK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);