import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { app } from '../firebase/initFirebase'

import { sortByNickname } from '../utils'

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
            className='w-max transform cursor-pointer transition delay-10 duration-500
            ease-in-out hover:-translate-y-2'
        >
            <Link href={`${person.link}`}>
                <a className=''>
                    <img
                        src={person.imgSrc}
                        alt=''
                        className='h-54 w-42 rounded-xl'
                    />

                    <p className='mt-1 w-40 font-semibold'>{person.nickname}</p>
                </a>
            </Link>
        </section>
    )
}

export default function PesronsList({ rulerTitle, limit, country, category }) {
    const [persons, setPersons] = useState([])

    function personFilter(person) {
        if (category === 'all' && country === 'all') {
            return true
        } else if (category === 'all') {
            return person.country === country
        } else if (country === 'all') {
            return person.category === category
        } else {
            return person.category === category && person.country === country
        }
    }

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
                .sort(sortByNickname)
                .filter(personFilter)
                .slice(0, limit)
                .map((person, personIdx) => (
                    <PersonCard key={personIdx} person={person} />
                ))}
        </section>
    )
}
