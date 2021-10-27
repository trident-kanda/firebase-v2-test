import { initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage,ref} from "firebase/storage"
//Firebaseの準備
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};


const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore();
const auth = getAuth()
const storage = getStorage();
const storageRef = ref(storage);