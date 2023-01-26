import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKPRm4Vv0lkZSy2QtxxecZosB-1-cCdHo",
  authDomain: "react-portfolio-4a6da.firebaseapp.com",
  projectId: "react-portfolio-4a6da",
  storageBucket: "react-portfolio-4a6da.appspot.com",
  messagingSenderId: "253491051165",
  appId: "1:253491051165:web:ab7912972fbd7fd2a2b274",
  measurementId: "G-XVFQYSML02"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);