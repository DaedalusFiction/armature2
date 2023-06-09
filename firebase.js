import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYORxM5zmEsLGJ4d1lNVVoHni_yc1l4KQ",
    authDomain: "basilinda-e1dac.firebaseapp.com",
    projectId: "basilinda-e1dac",
    storageBucket: "basilinda-e1dac.appspot.com",
    messagingSenderId: "602883891062",
    appId: "1:602883891062:web:4b9adbddcc09e68a6ea457",
    measurementId: "G-PNQBW8DFZV",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
