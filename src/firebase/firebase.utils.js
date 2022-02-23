import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC9QSpHUVctgGPXlxqMyUzipoNT-iaqb5A",
  authDomain: "crwn-db-5e43f.firebaseapp.com",
  projectId: "crwn-db-5e43f",
  storageBucket: "crwn-db-5e43f.appspot.com",
  messagingSenderId: "423013704939",
  appId: "1:423013704939:web:31749c4237b7e271a0caae",
  measurementId: "G-Q8B3S5NGY2"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;