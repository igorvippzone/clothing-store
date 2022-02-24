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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    console.log(displayName, createdAt);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user ', error.message );
    }

  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;