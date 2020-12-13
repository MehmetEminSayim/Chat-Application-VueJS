import firebase from "firebase/app";
import firestore from "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyAn8AjKFEVoFqq5wBbQsZ0VPmlo6OTPqWY",
  authDomain: "vue-chat-88f4c.firebaseapp.com",
  databaseURL: "https://vue-chat-88f4c-default-rtdb.firebaseio.com",
  projectId: "vue-chat-88f4c",
  storageBucket: "vue-chat-88f4c.appspot.com",
  messagingSenderId: "647652588165",
  appId: "1:647652588165:web:c91fc39c8d728d906047ec"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
