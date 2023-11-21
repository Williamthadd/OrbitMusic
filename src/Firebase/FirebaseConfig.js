import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get, update, } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCf3oHP-wHy4Bov_qkw96TE4QXNv3kPvJ0",          
  authDomain: "orbitmusic-1.firebaseapp.com",
  projectId: "orbitmusic-1",
  storageBucket: "orbitmusic-1.appspot.com",
  messagingSenderId: "572251024685",
  appId: "1:572251024685:web:5f9044b261fd012f64f7a4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, ref, set, get, signInWithEmailAndPassword, update };