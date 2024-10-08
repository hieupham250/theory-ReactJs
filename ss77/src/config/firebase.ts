// cấu hình firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "test-e6d42.firebaseapp.com",
  projectId: "test-e6d42",
  storageBucket: "test-e6d42.appspot.com",
  messagingSenderId: "803133051927",
  appId: "1:803133051927:web:30ac38f0c9357a91afb852",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
