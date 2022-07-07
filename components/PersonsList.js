import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { app } from '../firebase/initFirebase'

import { sortByNickname } from '../utils'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const db = getFirestore(app)

function NextIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M13 7l5 5m0 0l-5 5m5-5H6'
            />
        </svg>
    )
}

function GetRandom(arr, limit) {
    var rand = Math.floor(Math.random() * arr.length)
    return rand
}

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
            className='w-max transform cursor-pointer overflow-visible
            transition delay-10 duration-500 ease-in-out '
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

export function PersonsLine() {
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
        <section className='flex select-none'>
            <Swiper
                className=''
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                watchOverflow={false}
                navigation={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
            >
                {persons.sort(sortByNickname).map((person, personIdx) => (
                    <SwiperSlide key={personIdx}>
                        <PersonCard key={personIdx} person={person} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default function PersonsList({ rulerTitle, limit, country, category }) {
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
        <section className='flex select-none flex-wrap justify-center gap-10'>
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
