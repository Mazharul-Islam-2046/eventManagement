// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFfOt6x0SQaavafer6QWm98ilzhUhOjOM",
  authDomain: "mz-event-management.firebaseapp.com",
  projectId: "mz-event-management",
  storageBucket: "mz-event-management.appspot.com",
  messagingSenderId: "124553389536",
  appId: "1:124553389536:web:f7065df10da9e4b187b785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;