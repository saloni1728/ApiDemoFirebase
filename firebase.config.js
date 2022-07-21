import {getDatabase} from 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvxre4DJzE6saXT8CykY8S2DFTgLJGu4s",
  authDomain: "react-housing-14435.firebaseapp.com",
  databaseURL: "https://react-housing-14435-default-rtdb.firebaseio.com",
  projectId: "react-housing-14435",
  storageBucket: "react-housing-14435.appspot.com",
  messagingSenderId: "898923580767",
  appId: "1:898923580767:web:b8ed7dfde129c06dcf7aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase(app);

export {db};