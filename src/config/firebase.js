import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCD8qiyb4bhm_2m7kp6Q0KSY7ztzWCOr9M",
    authDomain: "projetoihc-9802a.firebaseapp.com",
    projectId: "projetoihc-9802a",
    storageBucket: "projetoihc-9802a.appspot.com",
    messagingSenderId: "353919612506",
    appId: "1:353919612506:web:4c6bce69a14e6106c34a63"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);