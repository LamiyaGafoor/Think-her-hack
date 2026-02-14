 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"; 
 const firebaseConfig = {
    apiKey: "AIzaSyDKP5vA-3e34adq4JWiRxFAeIDp4K0vbao",
    authDomain: "shared-journal-ea72c.firebaseapp.com",
    projectId: "shared-journal-ea72c",
    storageBucket: "shared-journal-ea72c.firebasestorage.app",
    messagingSenderId: "233650164083",
    appId: "1:233650164083:web:ce0c22bc72705af37eb506",
    measurementId: "G-QQ4KEFH60V"
  };       
 import { getFirestore, collection, addDoc } 
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

//      // 🔹 Save function
// window.saveJournal = async function () {

//     const text = document.getElementById("msg").value;

//     if (text.trim() === "") {
//         alert("Journal is empty!");
//         return;
//     }

//     try {
//         await addDoc(collection(db, "journals"), {
//             content: text,
//             createdAt: new Date()
//         });

//         alert("Journal Saved to Firebase 💗");

//         document.getElementById("msg").value = "";

//     } catch (error) {
//         console.error("Error saving:", error);
//         alert("Error saving journal");
//     }
// };

// Start Firebase
const app = initializeApp(firebaseConfig);

// Connect to database
// const db = getFirestore(app);

// Save function
// window.saveJournal = async function (name) {

//     const text = document.getElementById("msg").value;

//     if (text === "") {
//         alert("Write something first!");
//         return;
//     }

//     try {
//         await addDoc(collection(db, "journals"), {
//             content: text,
//             createdAt: new Date()
//         });

//         alert("Saved to Firebase!");
//         document.getElementById("msg").value = "";

//     } catch (error) {
//         alert("Error saving");
//         console.log(error);
//     }
// };

// async function saveJournal(name, text, timestamp) {
//   const db = getFirestore(app);
  
//   const journalCollectionRef = collection(db, 'journal');
  
//   const docRef = await addDoc(journalCollectionRef, {
//     name: name,
//     text: text,
//     timestamp: timestamp
//   });
//   console.log("Document written with ID: ", docRef.id);
// }
window.saveJournal = saveJournal;
async function saveJournal(name, timestamp) {
  const db = getFirestore(app);

  const journalCollectionRef = collection(db, 'journal');

  const text = document.querySelector("textarea").value;

  await addDoc(journalCollectionRef, {
    name: name, // or get from input
    text: text,
    timestamp: new Date()
  });

  alert("Saved successfully!");
}