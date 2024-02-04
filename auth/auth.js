// Import Firebase Authentication functions and objects
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import { auth } from "./firebase"; // Assuming your Firebase instance is exported from 'firebase.js'

// Register a new user
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle successful registration
  } catch (error) {
    // Handle registration error
  }
};

// Sign in an existing user with email and password
const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle successful sign-in
  } catch (error) {
    // Handle sign-in error
  }
};

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    // Handle successful Google sign-in
  } catch (error) {
    // Handle Google sign-in error
  }
};

// Monitor the authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});

// Sign out the user
const signOutUser = async () => {
  try {
    await signOut(auth);
    // Handle successful sign-out
  } catch (error) {
    // Handle sign-out error
  }
};

export { registerUser, signInUser, signInWithGoogle, signOutUser };
