import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKlc7h6zHBYBrQBFCRr68H06QwKvqae34",
    authDomain: "armature-6e64a.firebaseapp.com",
    projectId: "armature-6e64a",
    storageBucket: "armature-6e64a.appspot.com",
    messagingSenderId: "144478779339",
    appId: "1:144478779339:web:440c4de8b7f81e4bdba84e",
    measurementId: "G-10WPPK89LE",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
