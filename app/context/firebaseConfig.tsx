// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATptXwGlEgTOu_6l6ueQsGa6QVLo4pm7E",
  authDomain: "foxbith-auth-email.firebaseapp.com",
  projectId: "foxbith-auth-email",
  storageBucket: "foxbith-auth-email.appspot.com",
  messagingSenderId: "854649052072",
  appId: "1:854649052072:web:88d45a4aa563371bfd5b9d",
  measurementId: "G-RMEWXELLD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };