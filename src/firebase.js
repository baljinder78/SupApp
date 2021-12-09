import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: 'AIzaSyADt1b1ds5xtevpFM5c7K8GreXp3MY02v0',
  authDomain: 'whatsappclone-6a2ea.firebaseapp.com',
  projectId: 'whatsappclone-6a2ea',
  storageBucket: 'whatsappclone-6a2ea.appspot.com',
  messagingSenderId: '538545234700',
  appId: '1:538545234700:web:7f93cb77bffa65c5d7df29',
  measurementId: '${config.measurementId}',
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
