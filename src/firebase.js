// import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/database';




const config = {
  apiKey: "AIzaSyD5ag8cvhnbLu2yL9parTNFeEWv9tFF-f8",
  authDomain: "dad-website-4806d.firebaseapp.com",
  databaseURL: "https://dad-website-4806d.firebaseio.com",
  projectId: "dad-website-4806d",
  storageBucket: "dad-website-4806d.appspot.com",
  messagingSenderId: "145294775771",
  appId: "1:145294775771:web:27a3f1709674f810ec43fe",
  measurementId: "G-4N34W66E6Y",
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseImage = firebaseDB.ref("albums");

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export { firebase, firebaseDB, firebaseImage, firebaseLooper };
