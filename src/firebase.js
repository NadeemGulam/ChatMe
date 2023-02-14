import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHabbeWettTHmOoYtejn8FvBysmiIoAGM",
  authDomain: "chat-f83f0.firebaseapp.com",
  projectId: "chat-f83f0",
  storageBucket: "chat-f83f0.appspot.com",
  messagingSenderId: "661601656669",
  appId: "1:661601656669:web:226472223328fc046052b4",
  measurementId: "G-FNNCR7XW3H"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()




