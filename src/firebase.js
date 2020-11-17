import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyD2-Wbfk9diOoonVHPMvBZvBZcpl2RQ8-U",
    authDomain: "emoji-chatting.firebaseapp.com",
    databaseURL: "https://emoji-chatting.firebaseio.com/",
    projectId: "emoji-chatting",
    storageBucket: "emoji-chatting.appspot.com",
    messagingSenderId: "40126219601",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;