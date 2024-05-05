// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "realtor-clone-2e260.firebaseapp.com",
  projectId: "realtor-clone-2e260",
  storageBucket: "realtor-clone-2e260.appspot.com",
  messagingSenderId: "780908166567",
  appId: "1:780908166567:web:314ed1f01009067efa0a82"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()