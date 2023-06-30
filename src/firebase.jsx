
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7MdhtsAu0kOqLEb2p-1MV5I3b2hK9D58",
  authDomain: "croom-c9328.firebaseapp.com",
  projectId: "croom-c9328",
  storageBucket: "croom-c9328.appspot.com",
  messagingSenderId: "124607212361",
  appId: "1:124607212361:web:8ba27696017a3bd8a98898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);