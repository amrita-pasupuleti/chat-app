// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-662ec.firebaseapp.com",
  projectId: "reactchat-662ec",
  storageBucket: "reactchat-662ec.appspot.com",
  messagingSenderId: "144604239629",
  appId: "1:144604239629:web:596b0370838fde841fc244",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
