import Link from 'next/link'
import { useRouter } from 'next/router'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import RaceCard from '../../components/RaceCard'
import EthnicCard from '../../components/EthnicCard'

import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    query,
} from 'firebase/firestore'
import 'firebase/firestore'

import SearchButton from '../../components/SearchButton'
import PesronsList from '../../components/PersonsList'
import { sortByTitle } from '../../utils'
import ArtsList from '../../components/ArtsList'

const categories = [
    { id: 1, title: 'Личности', path: '/glossary/persons' },
    { id: 2, title: 'Этносы', path: '/glossary/ethnics' },
    { id: 3, title: 'Расы', path: '/glossary/races' },
    { id: 4, title: 'Слова', path: '/glossary/words' },
    { id: 6, title: 'Искусство', path: '/glossary/art' },
]

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

export function GlossaryCategories() {
    return (
        <ul className='m-auto flex flex-wrap justify-center gap-6 gap-x-6 text-center text-2xl font-semibold'>
            {categories.sort(sortByTitle).map(({ id, title, path }) => (
                <li key={id}>
                    <Link key={id} href={path} passHref>
                        <a
                            className='select-none rounded-xl border-2 border-strict-black px-3 py-1 transition delay-5
                duration-100 ease-in-out hover:bg-strict-black
                hover:text-pale-white dark:border-pale-white/90 dark:text-pale-white 
                 dark:hover:bg-pale-white dark:hover:text-strange-black'
                        >
                            {title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export function ToCategoryButton({ link, title }) {
    return (
        <Link href={link} passHref>
            <a
                className='group m-auto mb-4 flex  w-full cursor-pointer items-center rounded-md py-2 
                        px-3 font-semibold transition delay-5 duration-300 ease-in-out
                        hover:shadow-md dark:hover:bg-slate-200/10 dark:hover:text-orange-300'
            >
                {title}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='ml-auto h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                </svg>
            </a>
        </Link>
    )
}

export default function Glossary({ races, ethnics }) {
    return (
        <main className='mx-auto max-w-5xl'>
            <header className='py-16 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold sm:text-5xl'>
                    Глоссарий
                </h1>

                <p className='mb-7 tracking-wide text-slate-700 first-line:text-lg dark:text-pale-white/90'>
                    Энциклопедия, которую ты заслужил.
                </p>
                <GlossaryCategories />
                <SearchButton />
            </header>

            <div className='space-y-7'>
                <div className=''>
                    <ToCategoryButton
                        link='glossary/persons'
                        title='Личности'
                    />

                    <PesronsList category='all' country='all' limit={5} />
                </div>

                <div>
                    <ToCategoryButton link='glossary/art' title='Искусство' />

                    <div className='flex flex-wrap justify-evenly gap-10'>
                        <ArtsList />
                    </div>
                </div>

                <div>
                    <ToCategoryButton link='glossary/races' title='Расы' />

                    <div className='flex flex-wrap justify-evenly gap-10'>
                        {races.slice(0, 5).map((post, index) => (
                            <RaceCard key={index} post={post} />
                        ))}
                    </div>
                </div>

                <div>
                    <ToCategoryButton link='glossary/ethnics' title='Этносы' />

                    <div className='flex flex-wrap justify-evenly gap-10'>
                        {ethnics.slice(0, 5).map((post, index) => (
                            <EthnicCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export async function getStaticProps() {
    const rulersFiles = fs.readdirSync(path.join('posts/rulers'))
    const racesFiles = fs.readdirSync(path.join('posts/races'))
    const ethnicsFiles = fs.readdirSync(path.join('posts/ethnics'))

    const emperors = rulersFiles.map((filename) => {
        const slug = filename.replace('.mdx', '')

        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/rulers', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMetadata)

        return {
            slug,
            frontmatter,
        }
    })

    const races = racesFiles.map((filename) => {
        const slug = filename.replace('.mdx', '')

        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/races', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMetadata)

        return {
            slug,
            frontmatter,
        }
    })

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
            emperors: emperors,
            races: races,
            ethnics: ethnics,
        },
    }
}
