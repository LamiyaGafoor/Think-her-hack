import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDKP5vA-3e34adq4JWiRxFAeIDp4K0vbao",
    authDomain: "shared-journal-ea72c.firebaseapp.com",
    projectId: "shared-journal-ea72c",
    storageBucket: "shared-journal-ea72c.firebasestorage.app",
    messagingSenderId: "233650164083",
    appId: "1:233650164083:web:ce0c22bc72705af37eb506",
    measurementId: "G-QQ4KEFH60V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// SIGN UP
// window.signUp = function() {
//   createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
//     .then(() => {
//       alert("Account Created!");
//       window.location.href = "journal.html";
//     })
//     .catch((error) => {      alert(error.message);
//     });
// };

// LOGIN
// window.login = function() {
//   signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
//     .then(() => {
//       alert("Login Successful!");
//       window.location.href = "homepage.html";
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// };

window.login = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "lamisafa" && password === "246810") {
        window.location.href = "homepage.html";
    } else {
        alert("Wrong Username or Password!");
    }
}