import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwktCqiJHUbCeAMwtWOtfsC0huafVgqOc",
  authDomain: "react-slack-3efdc.firebaseapp.com",
  projectId: "react-slack-3efdc",
  storageBucket: "react-slack-3efdc.appspot.com",
  messagingSenderId: "693910557656",
  appId: "1:693910557656:web:76cb59879d3cb43a5998ad"
};


  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }