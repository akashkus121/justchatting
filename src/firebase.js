import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLVPEhsFC_0qk9QQ_zZFOGk89VzrOkUwI",
  authDomain: "asdas-37ba3.firebaseapp.com",
  projectId: "asdas-37ba3",
  storageBucket: "asdas-37ba3.appspot.com",
  messagingSenderId: "421704414875",
  appId: "1:421704414875:web:8382480865fb269097b83e",
  measurementId: "G-8ZNPCX21JT"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
