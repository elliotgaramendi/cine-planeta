import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../configs/authFirebase";

export const signUp = (user) => {
  const { email, password } = user;
  return (createUserWithEmailAndPassword(auth, email, password));
};

export const signIn = (user) => {
  const { email, password } = user;
  return (signInWithEmailAndPassword(auth, email, password));
};

export const recoverPassword = (user) => {
  const { email } = user;
  return (sendPasswordResetEmail(auth, email));
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return (signInWithPopup(auth, provider));
};