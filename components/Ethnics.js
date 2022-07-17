import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
import { app } from '../firebase/initFirebase'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { sortByTitle, sortForEthnics } from '../utils'

// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

const db = getFirestore(app)

export function EthnicCardForMdx({ post }) {
    return (
        <section
            className=' max-w-md transform cursor-pointer overflow-hidden 
                        transition delay-10 duration-300 ease-in-out '
        >
            <Link href={`/glossary/ethnics/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-72 w-[448px] rounded-xl border-2  border-strict-black dark:border-0'
                    />

                    <p className='mx-auto mt-2 w-32 text-center font-serif text-2xl font-semibold'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function EthnicCard({ ethnic }) {
    return (
        <section
            className='max-w-md transform cursor-pointer
                        overflow-hidden transition delay-10 duration-500 ease-in-out hover:-translate-y-2'
        >
            <Link href={`${ethnic.link}`}>
                <a className=''>
                    <img
                        src={ethnic.imgSrc}
                        alt=''
                        className='h-72 w-[448px] rounded-xl border-2  border-strict-black dark:border-0'
                    />

                    <p className='mx-auto mt-2 text-center font-serif text-2xl font-semibold'>
                        {ethnic.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}

export function EthnicsList({ limit }) {
    const [ethnics, setEthnic] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Ethnics')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setEthnic(
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
        <section className='flex flex-wrap justify-around gap-x-20 gap-y-10'>
            {ethnics
                .sort(sortByTitle)
                .sort(sortForEthnics)
                .slice(0, limit)
                .map((ethnic, ethnicIdx) => (
                    <EthnicCard key={ethnicIdx} ethnic={ethnic} />
                ))}

            {/* <div className='flex flex-wrap justify-evenly gap-10'>
                {ethnics
                    .sort(sortForEthnics)
                    .slice(0, 2)
                    .map((post, index) => (
                        <EthnicCardForMdx key={index} post={post} />
                    ))}
            </div> */}
        </section>
    )
}

export default function EthnicsLine({}) {
    const [ethnics, setEthnic] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, 'Ethnics')

        const q = query(collectionRef)

        const unsub = onSnapshot(q, (querySnapshot) => {
            setEthnic(
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
                {ethnics.sort(sortForEthnics).map((ethnic, index) => (
                    <SwiperSlide key={index}>
                        <EthnicCard key={index} ethnic={ethnic} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export async function getStaticProps() {
    const ethnicsFiles = fs.readdirSync(path.join('posts/ethnics'))

    const ethnics = ethnicsFiles.map((filename) => {
        const slug = filename.replace('.mdx', '')

        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/ethnics', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMetadata)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            ethnics: ethnics,
        },
    }
}
