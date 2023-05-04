import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBU3R7uoDqmehk0sOsxx1MihXw5bQQr8Tk",
  authDomain: "react-netflix-clone-8f977.firebaseapp.com",
  projectId: "react-netflix-clone-8f977",
  storageBucket: "react-netflix-clone-8f977.appspot.com",
  messagingSenderId: "57209945678",
  appId: "1:57209945678:web:47d4c852a391db89fb8d1f",
  measurementId: "G-KB3NJRTVD9"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);