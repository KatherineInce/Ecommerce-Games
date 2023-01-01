// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_qJXrg8A1ZXn18qRFL3cAyvswferPXTc",
  authDomain: "videogame-ecommerce.firebaseapp.com",
  projectId: "videogame-ecommerce",
  storageBucket: "videogame-ecommerce.appspot.com",
  messagingSenderId: "600592572167",
  appId: "1:600592572167:web:5b94debcfd75914507efa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initFirestoreApp = () => {
    return app
} 

export default initFirestoreApp