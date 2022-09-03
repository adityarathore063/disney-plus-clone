// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, googleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXCCfKaHtUB054xBLZz3SoBrcBpqp0XZg",
  authDomain: "disney-clone-ebab3.firebaseapp.com",
  databaseURL: "https://disney-clone-ebab3-default-rtdb.firebaseio.com",
  projectId: "disney-clone-ebab3",
  storageBucket: "disney-clone-ebab3.appspot.com",
  messagingSenderId: "824811222625",
  appId: "1:824811222625:web:493115d0e063ce2be11c20",
  measurementId: "G-JMW5CHMBBX"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider(); // add the social login of google (that little popuptells you to pick up which email you wanna log in with)

export {auth, provider, storage};
export default db;


