import { initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage,ref} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDuKVU28SLDUbvJ8_5yCmYiUD4Z0AVLcVw",
    authDomain: "testyou-23df2.firebaseapp.com",
    projectId: "testyou-23df2",
    storageBucket: "testyou-23df2.appspot.com",
    messagingSenderId: "63866975129",
    appId: "1:63866975129:web:bd6bca156d28548c071908",
    measurementId: "G-53J5EGH592"
  };

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore();
const auth = getAuth()
const storage = getStorage();
const storageRef = ref(storage);