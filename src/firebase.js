// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHDg1dEuHbioQ7SngKc1APfI-8e76ptuk",
    authDomain: "check-ahead.firebaseapp.com",
    projectId: "check-ahead",
    storageBucket: "check-ahead.appspot.com",
    messagingSenderId: "837133193825",
    appId: "1:837133193825:web:29c869c5a2839eb374d020"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {
    firebase
};