import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtbwEhFzWO6BQtPZOBfJFeBUw6b5qPmDg",
    authDomain: "crwn-db-ad97d.firebaseapp.com",
    databaseURL: "https://crwn-db-ad97d.firebaseio.com",
    projectId: "crwn-db-ad97d",
    storageBucket: "crwn-db-ad97d.appspot.com",
    messagingSenderId: "646582556078",
    appId: "1:646582556078:web:294f47269058010f4c643f",
    measurementId: "G-052JJCW593"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;