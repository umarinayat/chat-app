import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

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
const db = getFirestore(app);

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

async function sendMessage(user, text) {
  try {
    await addDoc(
      collection(db, "chat-room", "sjGheb5EqGmX9j6MISD5", "messages"),
      {
        uid: user.uid,
        displayName: user.displayName,
        text: text.trim(),
        timestamp: serverTimestamp(),
      }
    );
  } catch (error) {
    console.error(error);
  }
}

function getMessages(callback) {
  return onSnapshot(
    query(
      collection(db, "chat-room", "sjGheb5EqGmX9j6MISD5", "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapShot) => {
      const messages = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    }
  );
}

export { loginWithGoogle, sendMessage, getMessages };
