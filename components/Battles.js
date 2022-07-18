import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { app } from '../firebase/initFirebase'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { shuffle } from '../utils'

const db = getFirestore(app)

export function BattleCard({ battle }) {
    return (
        <section
            className='max-w-md transform cursor-pointer
                        overflow-hidden transition delay-10 duration-500 ease-in-out hover:-translate-y-2'
        >
            <Link href={`${battle.link}`}>
                <a className=''>
                    <img
                        src={battle.imgSrc}
                        alt=''
                        className='h-72 w-[448px] rounded-xl border-2  border-strict-black dark:border-0'
                    />

                    <p className='mx-auto mt-2 text-center font-serif text-2xl font-semibold'>
                        {battle.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function BattlesLine({}) {
    const [battles, setBattle] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Battles')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setBattle(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    title: doc.data().title,
                }))
            )
        })
        return unsub
    }, [])
    shuffle(battles)
    return (
        <section className='flex max-w-xl select-none items-center'>
            <Swiper
                slidesPerView={1}
                navigation={{
                    clickable: true,
                }}
                centeredSlides={true}
                modules={[Navigation, Pagination]}
                className=''
            >
                {battles.map((battle, battleIdx) => (
                    <SwiperSlide key={battleIdx}>
                        <BattleCard key={battleIdx} battle={battle} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default function BattlesList({}) {
    const [battles, setBattle] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Battles')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setBattle(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    title: doc.data().title,
                }))
            )
        })
        return unsub
    }, [])
    return (
        <section className='flex flex-wrap justify-around gap-x-20 gap-y-10'>
            {battles.map((battle, battleIdx) => (
                <BattleCard key={battleIdx} battle={battle} />
            ))}
        </section>
    )
}
