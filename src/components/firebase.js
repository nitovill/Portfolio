import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiCQl4wsxJ3CsnPjee-G5G05S986q5rrY",
  authDomain: "portfolio-88ffc.firebaseapp.com",
  projectId: "portfolio-88ffc",
  storageBucket: "portfolio-88ffc.appspot.com",
  messagingSenderId: "734273802551",
  appId: "1:734273802551:web:0b0621193ea076bf1f0ab2",
});
var db = firebaseApp.firestore();
export { db };
