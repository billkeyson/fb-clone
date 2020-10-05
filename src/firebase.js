import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyALgucpH2BQyUF9AEk5qLc7lQ3Iy_ICRtI",
    authDomain: "fb-clone-359ee.firebaseapp.com",
    databaseURL: "https://fb-clone-359ee.firebaseio.com",
    projectId: "fb-clone-359ee",
    storageBucket: "fb-clone-359ee.appspot.com",
    messagingSenderId: "719951860409",
    appId: "1:719951860409:web:bcbf50988f51d1efa88168"
  };

 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db  = firebaseApp.firestore();
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()
 export {auth,provider}
 export default db