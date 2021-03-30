import firebase from 'firebase'

const firebaseConfig  = {
  apiKey: "AIzaSyDPgiszY7ETn6UAQxraEMCF3kohi1TS0JQ",
  authDomain: "ordenamento-63cba.firebaseapp.com",
  projectId: "ordenamento-63cba",
  storageBucket: "ordenamento-63cba.appspot.com",
  messagingSenderId: "513694477561",
  appId: "1:513694477561:web:8d63c3beb075ac36090628",
  measurementId: "G-JPFPQRF1VC"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;