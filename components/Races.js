import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { app } from '../firebase/initFirebase'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const db = getFirestore(app)

export function RaceCardMdx({ post }) {
    return (
        <section
            className='w-max transform cursor-pointer transition delay-10 
                        duration-500 ease-in-out hover:-translate-y-2'
        >
            <Link href={`/glossary/races/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-60 w-48 rounded-xl'
                    />

                    <p className='mx-auto mt-2 w-32 text-center font-semibold'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function RaceCard({ race }) {
    return (
        <section
            className='w-max transform cursor-pointer transition delay-10 
                        duration-500 ease-in-out hover:-translate-y-2'
        >
            <Link href={`${race.link}`}>
                <a className=''>
                    <img
                        src={race.imgSrc}
                        alt=''
                        className='h-72 w-56  rounded-xl'
                    />

                    <p className='mx-auto mt-2 w-32 text-center font-semibold'>
                        {race.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function RacesLine({}) {
    const [races, setRace] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Races')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setRace(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    title: doc.data().title,
                    link: doc.data().link,
                }))
            )
        })
        return unsub
    }, [])

    return (
        <section className='center flex max-w-xs select-none'>
            <Swiper
                slidesPerView={1}
                navigation={{
                    clickable: true,
                }}
                centeredSlides={true}
                modules={[Navigation, Pagination]}
                className=''
            >
                {races.map((race, index) => (
                    <SwiperSlide key={index}>
                        <RaceCard key={index} race={race} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default function RacesList({}) {
    const [races, setRace] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Races')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setRace(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    title: doc.data().title,
                    link: doc.data().link,
                }))
            )
        })
        return unsub
    }, [])

    return (
        <div className='flex flex-wrap justify-evenly gap-10'>
            {races.map((race, raceIdx) => (
                <RaceCard key={raceIdx} race={race} />
            ))}

            {/* <div className='flex flex-wrap justify-evenly gap-10'>
                        {races.slice(0, 5).map((post, index) => (
                            <RaceCardMdx key={index} post={post} />
                        ))}
                    </div> */}
        </div>
    )
}
