import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Replace with your Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyA2RTbaUASh93H_hszZmb91SuyydMHrCys",
  authDomain: "petchly-bc6e3.firebaseapp.com",
  projectId: "petchly-bc6e3",
  storageBucket: "petchly-bc6e3.appspot.com",
  messagingSenderId: "763544923438",
  appId: "1:763544923438:web:e7da2c01b12bca25a35ebf",
  measurementId: "G-JE6V72SPY5"
  // ...rest of your config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 
