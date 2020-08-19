importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCFYFUPwKGKh5yT-rFj3Kr5BEm75BwZ_r0",
    authDomain: "fir-messaging-7794e.firebaseapp.com",
    databaseURL: "https://fir-messaging-7794e.firebaseio.com",
    projectId: "fir-messaging-7794e",
    storageBucket: "fir-messaging-7794e.appspot.com",
    messagingSenderId: "78871797944",
    appId: "1:78871797944:web:9d69390d950f41607ed44d"
  };
  
   

firebase.initializeApp(firebaseConfig);
firebase.messaging();
 


/*firebase.initializeApp({
    apiKey: "AIzaSyCFYFUPwKGKh5yT-rFj3Kr5BEm75BwZ_r0",
    authDomain: "fir-messaging-7794e.firebaseapp.com",
    databaseURL: "https://fir-messaging-7794e.firebaseio.com",
    projectId: "fir-messaging-7794e",
    storageBucket: "fir-messaging-7794e.appspot.com",
    messagingSenderId: "78871797944",
    appId: "1:78871797944:web:9d69390d950f41607ed44d" 
})
firebase.messaging(); */