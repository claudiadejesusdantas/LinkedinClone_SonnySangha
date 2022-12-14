// import { initializeApp } from "firebase/app";
// import firebase from 'firebase'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHCPeMIswh6dEgsNoXGtX_WW9DS6sLdjU",
    authDomain: "linkedin-clone-2cdae.firebaseapp.com",
    projectId: "linkedin-clone-2cdae",
    storageBucket: "linkedin-clone-2cdae.appspot.com",
    messagingSenderId: "813387370344",
    appId: "1:813387370344:web:0eff4105d6cb7b144690dd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const timestamp = new Date().getTime();

export { db, auth };
 