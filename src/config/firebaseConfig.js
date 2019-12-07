import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
  apiKey: "AIzaSyAyYr07Bx0G4khltDf0x-js-QFk4Fsccgg",
  authDomain: "wireframe-9ae64.firebaseapp.com",
  databaseURL: "https://wireframe-9ae64.firebaseio.com",
  projectId: "wireframe-9ae64",
  storageBucket: "wireframe-9ae64.appspot.com",
  messagingSenderId: "687242254680",
  appId: "1:687242254680:web:887234121651c7b437ed2d",
  measurementId: "G-6D5XQB9GQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;