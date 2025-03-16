import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestoreを使う場合
//import { getDatabase } from "firebase/database";   // Realtime Databaseを使う場合

const firebaseConfig = {
    apiKey: "AIzaSyAxXtTS2b_P_MMje7UQb3BqRhzBwMW-OOI",
    authDomain: "hackathon-ver7-18df0.firebaseapp.com",
    projectId: "hackathon-ver7-18df0",
    storageBucket: "hackathon-ver7-18df0.firebasestorage.app",
    messagingSenderId: "307889715061",
    appId: "1:307889715061:web:fe8553f49d77bacb1a853c",
  };

// Firebaseを初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore用
export { db };
//export const rtdb = getDatabase(app);  // Realtime Database用