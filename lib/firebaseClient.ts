import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAibqqg07wiK7Xa634MW3s16VE_G7GR5VE",
    authDomain: "jukebox-efd87.firebaseapp.com",
    projectId: "jukebox-efd87",
    storageBucket: "jukebox-efd87.appspot.com",
    messagingSenderId: "132083299893",
    appId: "1:132083299893:web:f42b5ca76e3e372b8ea37c",
    measurementId: "G-R8FBQPWV9F"
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); // state won't clear until logout
  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); // state will clear on browser close
}

export { firebase };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);