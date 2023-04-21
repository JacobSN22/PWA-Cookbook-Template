import { getDocs, collection, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { db } from "./firestore.config.js";

const q = query(collection(db, "Recipe"))
const snapshot = onSnapshot(q, querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
        console.log(change.doc.data());
    })
})