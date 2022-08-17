import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwlfE8Twh_V7CwHelYSUueR655UzBH3Io",
  authDomain: "chat-app-aa614.firebaseapp.com",
  projectId: "chat-app-aa614",
  storageBucket: "chat-app-aa614.appspot.com",
  messagingSenderId: "1044728195394",
  appId: "1:1044728195394:web:4d5f3357e37dbfd266c0db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return { uid: user.uid, displayName: user.displayName };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }

    return null;
  }
}

export { loginWithGoogle };
