import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcmyOnWas994zMhaA91GRZ5d22Koz9gRo",
    authDomain: "crwn-db-3c8dc.firebaseapp.com",
    databaseURL: "https://crwn-db-3c8dc.firebaseio.com",
    projectId: "crwn-db-3c8dc",
    storageBucket: "crwn-db-3c8dc.appspot.com",
    messagingSenderId: "49048131036",
    appId: "1:49048131036:web:31153b18bd527bee5d2b19"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
