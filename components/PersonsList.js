import {
    getFirestore,
    collection,
    doc,
    orderBy,
    onSnapshot,
    QuerySnapshot,
    query,
    limit,
} from 'firebase/firestore'
import { initializeApp, firebase } from 'firebase/app'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export function PersonCardForMdx({ post }) {
    return (
        <section
            className='w-max transform cursor-pointer transition delay-10 duration-500
                        ease-in-out hover:-translate-y-2'
        >
            <Link href={`/glossary/persons/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-52 w-40 rounded-xl'
                    />

                    <p className='mt-1 w-40 font-semibold'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function PersonCard({ person }) {
    return (
        <section
            key={person.id}
            className='w-max transform cursor-pointer transition delay-10 duration-500
            ease-in-out hover:-translate-y-2'
        >
            <Link href={`${person.link}`}>
                <a className=''>
                    <img
                        src={person.imgSrc}
                        alt=''
                        className='h-52 w-40 rounded-xl'
                    />

                    <p className='mt-1 w-40 font-semibold'>{person.nickname}</p>
                </a>
            </Link>
        </section>
    )
}

export default function PesronsList({ rulerTitle, limit }) {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Persons')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setPersons(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    nickname: doc.data().nickname,
                    link: doc.data().link,
                }))
            )
        })
        return unsub
    }, [])
    return (
        <section className='flex flex-wrap justify-evenly gap-10'>
            {persons
                .sort((a, b) => {
                    if (a.nickname > b.nickname) {
                        return 1
                    }
                    if (a.nickname < b.nickname) {
                        return -1
                    }
                })
                .filter((emperor) => emperor.rulerTitle === rulerTitle)
                .slice(0, limit)
                .map((person) => (
                    <PersonCard person={person} />
                ))}
        </section>
    )
}
