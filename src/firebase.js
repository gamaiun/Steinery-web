// src/firebase.js
import firebase from "firebase/app"
import "firebase/auth" // Import Firebase Authentication service

const firebaseConfig = {
  apiKey: "AIzaSyB6rRWWef9rb8h8EppdA3MmFuIxER_p59w", // From "api_key -> current_key"
  authDomain: "byotr-33385.firebaseapp.com", // Typically "project_id.firebaseapp.com"
  projectId: "byotr-33385", // From "project_info -> project_id"
  storageBucket: "byotr-33385.appspot.com", // From "project_info -> storage_bucket"
  messagingSenderId: "437648995468", // From "project_info -> project_number"
  appId: "1:437648995468:android:7fc73a03b78fa5b7e0b7a9", // From "client_info -> mobilesdk_app_id"
  // measurementId is not provided in your google-services.json file
}

if (typeof window !== "undefined") {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}

export const auth = firebase.auth()
export default firebase
