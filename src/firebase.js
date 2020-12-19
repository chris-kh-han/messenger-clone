import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCeLztDirTvfw8xUHnYKa6jUBd9dqEGy5s",
    authDomain: "messenger-clone-d0f4c.firebaseapp.com",
    projectId: "messenger-clone-d0f4c",
    storageBucket: "messenger-clone-d0f4c.appspot.com",
    messagingSenderId: "751894512511",
    appId: "1:751894512511:web:e15dfb5c59c97f1fc0d04a",
    measurementId: "G-T5JZL8E8E9"
  });

  const db = firebase.firestore();

  export { db };