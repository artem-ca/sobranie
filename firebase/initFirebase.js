import { initializeApp, firebase } from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore/lite'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'
import { doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

// export default async function initFirebase() {
//     const q = query(collection(db, 'Persons'))

//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, ' => ', doc.data().nickname)
//     })
//     return (
//         <p>
//             {querySnapshot.forEach((doc) => {
//                 {
//                     doc.data().nickname
//                 }
//             })}
//         </p>
//     )
// }
