import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCmJFxX8czJka3YAHZ4L6tQD5tglqYUZwk",
  authDomain: "usermanagement-3e839.firebaseapp.com",
  projectId: "usermanagement-3e839",
  storageBucket: "usermanagement-3e839.firebasestorage.app",
  messagingSenderId: "291163802163",
  appId: "1:291163802163:web:80c93db41678e5de6cb146",
  measurementId: "G-KXSPHC8RTP"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      await addDoc(collection(db, 'users'), { 
          uid: user.uid,
          name,
          authProvider: "local",
          email
      });

      console.log("User signed up successfully!");
  } catch (error) {  
      console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email, password) => {  
  try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
  } catch (error) { 
      console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = async () => {
  try {
      await signOut(auth);
      console.log("User logged out successfully!");
  } catch (error) {  
      console.error("Logout Error:", error.message);
      alert(error.message);
  }
};

export {auth, db, login, signup, logout}