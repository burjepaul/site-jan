import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATJ7tbgXSY_zIUek9VvGYzCn7_ThXcgMU",
  authDomain: "janproject-8ba3c.firebaseapp.com",
  projectId: "janproject-8ba3c",
  storageBucket: "janproject-8ba3c.firebasestorage.app",
  messagingSenderId: "325320042011",
  appId: "1:325320042011:web:f3f9eefe9daa8fc1c23abe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
