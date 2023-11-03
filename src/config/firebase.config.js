
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCfw_-iUAo0AnKsO9MRaesLL8tkHgdje_E",
    authDomain: "cars-doctor-2bbf5.firebaseapp.com",
    projectId: "cars-doctor-2bbf5",
    storageBucket: "cars-doctor-2bbf5.appspot.com",
    messagingSenderId: "326047449542",
    appId: "1:326047449542:web:00f1fb78262904d3a572c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
