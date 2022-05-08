// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADv4RNUOByXUEyE-lsQ4ml-tN47KCo6xg",
  authDomain: "full-stack-assignment-11-94c6f.firebaseapp.com",
  projectId: "full-stack-assignment-11-94c6f",
  storageBucket: "full-stack-assignment-11-94c6f.appspot.com",
  messagingSenderId: "625017249876",
  appId: "1:625017249876:web:18cbcf99e91584634e4dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;