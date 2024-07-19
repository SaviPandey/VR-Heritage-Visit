import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99UZ88KKqHzGcr9hECmxvxABsGglw704",
  authDomain: "proj6-ce4f9.firebaseapp.com",
  projectId: "proj6-ce4f9",
  storageBucket: "proj6-ce4f9.appspot.com",
  messagingSenderId: "972237565230",
  appId: "1:972237565230:web:f7ee5dd6b4c1722c025ebf"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage();
  export const db = getFirestore();
  export const auth = getAuth();