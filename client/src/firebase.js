// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-da403.firebaseapp.com",
  projectId: "mern-blog-da403",
  storageBucket: "mern-blog-da403.appspot.com",
  messagingSenderId: "547684614137",
  appId: "1:547684614137:web:5f179a8b3523acd25ec728"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);