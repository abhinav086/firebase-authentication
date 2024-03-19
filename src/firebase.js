import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAK2Rohyq3kEXrY6X0SsnAFv0_HXxCNvII",
  authDomain: "fir-authentification-c3876.firebaseapp.com",
  projectId: "fir-authentification-c3876",
  storageBucket: "fir-authentification-c3876.appspot.com",
  messagingSenderId: "115599784510",
  appId: "1:115599784510:web:17c9c1b15fc2df21156f6f", 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
