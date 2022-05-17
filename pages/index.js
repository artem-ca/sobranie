import Head from 'next/head'

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'
import 'firebase/firestore'
import PersonCard from '../components/PersonCard'

export default function Home({}) {
    return (
        <main className='mx-auto max-w-5xl'>
            <div
                className='m-auto mt-20 h-full w-max content-center items-center justify-center align-middle text-4xl
                font-semibold '
            >
                Sobranie.
            </div>
        </main>
    )
}
