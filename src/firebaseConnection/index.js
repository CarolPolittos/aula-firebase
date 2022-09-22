import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyArVnwqD85AfVAKnv7JhNg4bsK1cNhd46U",
  authDomain: "aula-firebase-b8878.firebaseapp.com",
  databaseURL: "https://aula-firebase-b8878-default-rtdb.firebaseio.com",
  projectId: "aula-firebase-b8878",
  storageBucket: "aula-firebase-b8878.appspot.com",
  messagingSenderId: "469733912441",
  appId: "1:469733912441:web:6eb1d1a2e35cfe084fc9a8",
  measurementId: "G-GZL8T92QJC"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;