import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBV-0feFnTS9xKu8h5h0f5m8n9h1Mv88Fg",
    authDomain: "candra-db.firebaseapp.com",
    databaseURL: "https://candra-db.firebaseio.com",
    projectId: "candra-db",
    storageBucket: "candra-db.appspot.com",
    messagingSenderId: "699115225388",
    appId: "1:699115225388:web:eb526f639fd2024bdc6c89",
    measurementId: "G-XM2C5FQ9S6"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    } 

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;