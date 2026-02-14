 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
 

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDKP5vA-3e34adq4JWiRxFAeIDp4K0vbao",
    authDomain: "shared-journal-ea72c.firebaseapp.com",
    projectId: "shared-journal-ea72c",
    storageBucket: "shared-journal-ea72c.firebasestorage.app",
    messagingSenderId: "233650164083",
    appId: "1:233650164083:web:ce0c22bc72705af37eb506",
    measurementId: "G-QQ4KEFH60V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 