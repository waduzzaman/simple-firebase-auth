// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmMt0FONSTDaFFCq8qZW6Z_STK5DCOcT8",
  authDomain: "simple-firebase-auth-36447.firebaseapp.com",
  projectId: "simple-firebase-auth-36447",
  storageBucket: "simple-firebase-auth-36447.appspot.com",
  messagingSenderId: "877036762710",
  appId: "1:877036762710:web:db48be1e8f64f988c96df7",
  measurementId: "G-6LKF6X6NVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;