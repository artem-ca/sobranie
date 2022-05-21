import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackButton from '../../../components/BackButton'
import { useState } from 'react'

import { initializeApp, firebase } from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    query,
    where,
} from 'firebase/firestore'

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

export default function PostPage({
    frontmatter: {
        title,
        lastName,
        firstName,
        patronymic,
        rulerTitle,
        dynasty,
        cover_image,
        post_link,
    },
    slug,
    content,
}) {
    const router = useRouter()

    const [person, setPerson] = useState({
        nickname: title,
        lastName: lastName,
        firstName: firstName,
        patronymic: patronymic,
        rulerTitle: rulerTitle,
        dynasty: dynasty,
        imgSrc: cover_image,
        link: post_link,
    })
    const onSubmit = async () => {
        const collectionRef = collection(db, 'Persons')
        const docRef = await addDoc(collectionRef, { ...person })
        setPerson({ nickname: '' })
        alert(`Person ${docRef.id} is added successfully`)
    }

    return (
        <>
            <div className=''>
                <BackButton />

                {/* Запись данных из поста в firebase */}

                {/* <div className='m-10 space-y-4'>
                    <button
                        onClick={onSubmit}
                        className='rounded-md bg-blue-500 px-3 py-1 font-semibold shadow-sm hover:bg-blue-600 '
                    >
                        Добваить
                    </button>
                </div> */}
                <div
                    className='mx-auto max-w-5xl font-montserrat text-lg'
                    dangerouslySetInnerHTML={{
                        __html: marked(content),
                    }}
                ></div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts/rulers'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(
        path.join('posts/rulers', slug + '.mdx'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMetadata)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
