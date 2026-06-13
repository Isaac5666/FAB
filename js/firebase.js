// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlyQ4goWOJwSEwml-LQ7XhDOM7P91l3sU",
  authDomain: "famapp-15cc1.firebaseapp.com",
  projectId: "famapp-15cc1",
  storageBucket: "famapp-15cc1.firebasestorage.app",
  messagingSenderId: "189069774544",
  appId: "1:189069774544:web:ebb5ff31ea22440d17d8d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


// // js/firebase.js

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// import {
//   getAuth
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// import {
//   getFirestore
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "YOUR_KEY",
//   authDomain: "famapp-15cc1.firebaseapp.com",
//   projectId: "famapp-15cc1",
//   storageBucket: "famapp-15cc1.firebasestorage.app",
//   messagingSenderId: "189069774544",
//   appId: "1:189069774544:web:ebb5ff31ea22440d17d8d5"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {

//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }

//   }
// }