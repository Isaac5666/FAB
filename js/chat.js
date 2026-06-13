import { auth, db } from "./firebase.js";

import {
 collection,
 addDoc,
 query,
 orderBy,
 onSnapshot,
 serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const messagesDiv =
document.getElementById("messages");

const sendBtn =
document.getElementById("sendBtn");

const msgInput =
document.getElementById("msgInput");

sendBtn.onclick = async () => {

 const text = msgInput.value.trim();

 if(!text) return;

 await addDoc(
   collection(db,"messages"),
   {
      sender:auth.currentUser.email,
      text,
      createdAt:serverTimestamp()
   }
 );

 msgInput.value="";
};

const q = query(
 collection(db,"messages"),
 orderBy("createdAt")
);

onSnapshot(q,(snapshot)=>{

 messagesDiv.innerHTML="";

 snapshot.forEach(doc=>{

   const msg = doc.data();

   messagesDiv.innerHTML += `
   <div class="message">
     <b>${msg.sender}</b><br>
     ${msg.text}
   </div>
   `;

 });

});