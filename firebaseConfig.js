// Este archivo configura e inicializa Firebase para tu proyecto.
// Instala Firebase primero: npm install firebase

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbdjaG5hLMedyhoFJ3ZMWIFUa-IGuheZA",
  authDomain: "reactpokeapi-7dab4.firebaseapp.com",
  projectId: "reactpokeapi-7dab4",
  storageBucket: "reactpokeapi-7dab4.firebasestorage.app",
  messagingSenderId: "866736591837",
  appId: "1:866736591837:web:41963f58e8099c7afcdc34",
  measurementId: "G-XWXMBXSZXY"
};

const app = initializeApp(firebaseConfig);

export default app;