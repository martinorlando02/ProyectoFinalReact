import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQcZ8XeqeriI-ta3CU7lqRHCTz7Yi3FIs",
  authDomain: "stylestride-699d6.firebaseapp.com",
  projectId: "stylestride-699d6",
  storageBucket: "stylestride-699d6.appspot.com",
  messagingSenderId: "549120669897",
  appId: "1:549120669897:web:3df14c79886f6ad3833518"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
