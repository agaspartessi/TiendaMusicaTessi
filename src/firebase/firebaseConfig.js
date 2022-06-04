
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfhk3dVd3VFidhVc8UaY_4sBnNDGisFxE",
  authDomain: "fb-31175-tiendamusica.firebaseapp.com",
  projectId: "fb-31175-tiendamusica",
  storageBucket: "fb-31175-tiendamusica.appspot.com",
  messagingSenderId: "1084312932628",
  appId: "1:1084312932628:web:8ab2a38437bf39b311f201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const coleccionProductos = collection( db, 'instrumentos2');