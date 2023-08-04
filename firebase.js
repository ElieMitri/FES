import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDfE3HJpO4D05Fr_UiQpeEz4AH6vCk26uo",
    authDomain: "frontend-simplified-5aab9.firebaseapp.com",
    projectId: "frontend-simplified-5aab9",
    storageBucket: "frontend-simplified-5aab9.appspot.com",
    messagingSenderId: "974126622078",
    appId: "1:974126622078:web:7054ce7998e2988c99ff2f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth();  
const storage = getStorage(app);
export default storage;

export {db}
