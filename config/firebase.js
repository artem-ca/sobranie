import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyBAaHnjN0CaV9pW1TekcFPCPfEO5pPid8c',
    authDomain: 'sobranie-1.firebaseapp.com',
    projectId: 'sobranie-1',
    storageBucket: 'sobranie-1.appspot.com',
    messagingSenderId: '916321424424',
    appId: '1:916321424424:web:b639904b115a1a1643511d',
    measurementId: 'G-EGNHBT4S1N',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
