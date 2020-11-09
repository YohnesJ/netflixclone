import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1ySlfYXysZ5B5glEOTtZ2AbcSX7jl_xo",
  authDomain: "netflix-6e477.firebaseapp.com",
  databaseURL: "https://netflix-6e477.firebaseio.com",
  projectId: "netflix-6e477",
  storageBucket: "netflix-6e477.appspot.com",
  messagingSenderId: "230058852146",
  appId: "1:230058852146:web:1dfa4f057647e1a8a3612b",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
