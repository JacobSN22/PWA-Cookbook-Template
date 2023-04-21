  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getFirestore, getDocs, collection, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
  import { renderRecipe } from "./ui.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBs0pBGjFVkyg9kiRWkikhNoOyZUxTgngQ",
    authDomain: "pwa-cookbook-6ecf6.firebaseapp.com",
    projectId: "pwa-cookbook-6ecf6",
    storageBucket: "pwa-cookbook-6ecf6.appspot.com",
    messagingSenderId: "750551536674",
    appId: "1:750551536674:web:fcdf2414dfb9dd1e26267b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  const getData = async collectionNam => {
    const q = query(collection(db, colletcionName))

    const snapshot = onSnapshot(q, querySnapshot => {
        querySnapshot.docCahnges().forEach(change => {
            if(change.type === "added") {
                renderRecipe(change.doc.data(), change.doc.id)
            }
            if(change.type === "removed") {
                //fjern data
            }
        })
    })
  }
  
  export {db, getData}