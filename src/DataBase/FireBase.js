
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD38Vp57yXagEQI029-vgUwnU1zE2IKcAs",
  authDomain: "chatbot-main-9f762.firebaseapp.com",
  projectId: "chatbot-main-9f762",
  storageBucket: "chatbot-main-9f762.appspot.com",
  messagingSenderId: "247292110308",
  appId: "1:247292110308:web:68e23afc885a648e4513f1",
  measurementId: "G-L5ZW3EQXV2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const SignInWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          const name = result.user.displayName;
          const email = result.user.email;
          const photoURL = result.user.photoURL;
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("photoURL", photoURL);
          resolve(result); 
        })
        .catch((error) => {
          console.log(error);
          reject(error); 
        });
    });
 };
  
  