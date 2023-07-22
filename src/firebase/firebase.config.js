// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-fKdWfaQTak2k_tB0rwtZBLLLEC6UWM",
  authDomain: "collage-bookings.firebaseapp.com",
  projectId: "collage-bookings",
  storageBucket: "collage-bookings.appspot.com",
  messagingSenderId: "400684333552",
  appId: "1:400684333552:web:0a43e7c4457c3e08298535"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);