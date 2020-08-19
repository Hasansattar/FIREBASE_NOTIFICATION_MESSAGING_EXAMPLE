import firebase from 'firebase'

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
 
 const messaging= firebase.messaging();

export function configureNotification(){
    Notification.requestPermission().then((Permission)=>{
        console.log(Permission);
        if(Permission ==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>", currentToken);
                  
                } else {
                   
                  console.log('No Instance ID token available. Request permission to generate one.');
                   
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                  
              });  
        }
    })
}