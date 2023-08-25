// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Lehxq8_8x11unsH7AEN7P_LW-pnQLU0",
  authDomain: "hiepnt-blog.firebaseapp.com",
  projectId: "hiepnt-blog",
  storageBucket: "hiepnt-blog.appspot.com",
  messagingSenderId: "690788078839",
  appId: "1:690788078839:web:3c4c10419768e2e4632ff2",
  measurementId: "G-V1FB92P914",
};

// Initialize Firebase
const defaultProject = initializeApp(firebaseConfig);
console.log(defaultProject.name)