// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhY5H_I3MvNujPwsrcjOouy5us4qcstQQ",
    authDomain: "email-password-auth-7f459.firebaseapp.com",
    projectId: "email-password-auth-7f459",
    storageBucket: "email-password-auth-7f459.appspot.com",
    messagingSenderId: "675257485070",
    appId: "1:675257485070:web:3723b823ef2be963ccb95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth