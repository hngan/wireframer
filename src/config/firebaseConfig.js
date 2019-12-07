import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
    apiKey: "AIzaSyCaoXRLqYQ53A2CjPguR4z1fIcOBHBfsio",
    authDomain: "myproject-b16f2.firebaseapp.com",
    databaseURL: "https://myproject-b16f2.firebaseio.com",
    projectId: "myproject-b16f2",
    storageBucket: "myproject-b16f2.appspot.com",
    messagingSenderId: "260281620703",
    appId: "1:260281620703:web:a36cf231f312a83e14316a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;