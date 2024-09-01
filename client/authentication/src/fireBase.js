// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "jwt-authentication-app.firebaseapp.com",
  projectId: "jwt-authentication-app",
  storageBucket: "jwt-authentication-app.appspot.com",
  messagingSenderId: "489843277845",
  appId: "1:489843277845:web:e14e87978b80687bb8ce1c",
};
console.log(JSON.stringify(firebaseConfig.apiKey));

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
