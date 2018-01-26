import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAOMv1GAinD6vuSpM849mPyu8iDQrFaueE",
    authDomain: "nova-approval.firebaseapp.com",
    databaseURL: "https://nova-approval.firebaseio.com",
    projectId: "nova-approval",
    storageBucket: "nova-approval.appspot.com",
    messagingSenderId: "954045747720"
  };

var fire = firebase.initializeApp(config);
export default fire;