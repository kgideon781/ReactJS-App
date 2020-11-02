import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCfSj9Ezn_uL-UWLxabSiY-Bvv-Wo4ytMA",
    authDomain: "my-portfolio-a6ebe.firebaseapp.com",
    databaseURL: "https://my-portfolio-a6ebe.firebaseio.com",
    projectId: "my-portfolio-a6ebe",
    storageBucket: "my-portfolio-a6ebe.appspot.com",
    messagingSenderId: "331571167801",
    appId: "1:331571167801:web:658ac9526fbc4664fa43e8",
    measurementId: "G-8Q6LWGJC15"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({timestampsInSnapshots: true})

    export default firebase;

