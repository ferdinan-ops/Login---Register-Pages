import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYx535iTaL5xxQn6W_aTJk7GvNlNjaUXE",
  authDomain: "simple-notes-app-bea16.firebaseapp.com",
  projectId: "simple-notes-app-bea16",
  storageBucket: "simple-notes-app-bea16.appspot.com",
  messagingSenderId: "978379031411",
  appId: "1:978379031411:web:bbad4fc05f07344db37b06",
  measurementId: "G-0R30CDG893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
