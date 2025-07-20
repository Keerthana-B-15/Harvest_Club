// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD1bCHoSxsnAgRir8VoIfrFXCc7MP-G33s",
  authDomain: "club-website-login.firebaseapp.com",
  projectId: "club-website-login",
  storageBucket: "club-website-login.firebasestorage.app",
  messagingSenderId: "739040459330",
  appId: "1:739040459330:web:343752524d9b6f06b34bdb",
  measurementId: "G-FGEY203J4C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getAnalytics(app);

// Signup function
window.handleSignup = function (email, password, confirmPassword) {
  if (!email || !password || !confirmPassword) return alert("All fields are required");
  if (password !== confirmPassword) return alert("Passwords do not match");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Signup error: " + error.message);
    });
};

// Login function
window.handleLogin = function (email, password) {
  if (!email || !password) return alert("Please fill in all fields");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "membership.html"; // Change as needed
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
};
