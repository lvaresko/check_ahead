// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2lZXspOZ03exIgApCOWbm6J77KG8pJaE",
    authDomain: "checkahead-41fde.firebaseapp.com",
    projectId: "checkahead-41fde",
    storageBucket: "checkahead-41fde.appspot.com",
    messagingSenderId: "780812450499",
    appId: "1:780812450499:web:32677a817eeec0cd1d8076"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();
let functions = firebase.functions();

export {
    firebase,
    db,
    storage,
    functions
};