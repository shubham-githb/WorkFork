import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACOb1Va3Gwsu1Qsa2Au5t6TB0supEstLk",
    authDomain: "smolz-c0bcf.firebaseapp.com",
    projectId: "smolz-c0bcf",
    storageBucket: "smolz-c0bcf.appspot.com",
    messagingSenderId: "97178004820",
    appId: "1:97178004820:web:aeb95e4fc609e15bed6cc1",
    measurementId: "G-0EGHEGCDF1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db