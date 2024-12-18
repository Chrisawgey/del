import { createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);

    
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};