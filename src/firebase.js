// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6cAxmGqcx7FtmnhBfDMAnaICQPPYPyCI",
  authDomain: "chat-app-82425.firebaseapp.com",
  projectId: "chat-app-82425",
  storageBucket: "chat-app-82425.appspot.com",
  messagingSenderId: "884720700368",
  appId: "1:884720700368:web:cb7009b98931c9c818c7d5",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


