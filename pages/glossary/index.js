import Head from 'next/head'
import Link from 'next/link'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import SearchButton from '../../components/SearchButton'
import PersonsList, { PersonsLine } from '../../components/Persons'

import RecommendationBlock from '../../components/RecommendationBlock'
import EthnicsLine, {
    EthnicCardForMdx,
    EthnicsList,
} from '../../components/Ethnics'
import RacesList, { RacesLine } from '../../components/Races'

const categories = [
    // { id: 0, title: 'Все', path: '/glossary' },
    { id: 2, title: 'Антропология', path: '/glossary/anthropology' },
    { id: 8, title: 'Архитектура', path: '/glossary/art' },
    { id: 6, title: 'Искусство', path: '/glossary/art' },
    { id: 3, title: 'История', path: '/glossary/history' },
    { id: 1, title: 'Личности', path: '/glossary/persons' },
    { id: 4, title: 'Слова', path: '/glossary/words' },
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
        <ul className='m-auto flex max-w-4xl flex-wrap justify-center gap-6 gap-x-6 text-center text-2xl font-semibold'>
            {categories.map(({ id, title, path }) => (
                <li key={id}>
                    <Link key={id} href={path} passHref>
                        <a
                            className='select-none rounded-[14px] border-2 border-strict-black px-3 py-1 transition delay-5
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
                className='group m-auto mb-4 flex w-full cursor-pointer items-center rounded-md py-2 
                        px-3 font-semibold transition delay-5 duration-300 ease-in-out hover:bg-gray-100
                        hover:opacity-80 dark:hover:bg-slate-200/10 dark:hover:text-orange-300 dark:hover:opacity-100 dark:hover:shadow-md'
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
            <Head>
                <title className=''>Sobranie</title>
                <meta name='description' content='Founded by Zaidullin' />
                <link rel='icon' href='/CoatofRussianEmpire.ico' />
            </Head>

            <header className='pt-16 pb-10 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold sm:text-5xl'>
                    Глоссарий
                </h1>

                <p className='mb-7 tracking-wide text-slate-700 first-line:text-lg dark:text-pale-white/90'>
                    Энциклопедия, которую ты заслужил.
                </p>
                <GlossaryCategories />
                <SearchButton />
            </header>

            <div className='flex flex-col gap-y-7'>
                <div className='overflow-x-hidden'>
                    <ToCategoryButton
                        link='glossary/persons'
                        title='Личности'
                    />

                    {/* <PersonsList
                        category='all'
                        country='all'
                        rulerTitle='all'
                        limit={5}
                    /> */}

                    <PersonsLine />
                </div>

                <div className='flex flex-wrap justify-around'>
                    <div className='overflow-x-hidden'>
                        <ToCategoryButton
                            link='glossary/ethnics'
                            title='Этносы'
                        />

                        <EthnicsLine />
                    </div>

                    <div className='overflow-x-hidden'>
                        <ToCategoryButton link='glossary/races' title='Расы' />

                        <RacesLine />
                    </div>
                </div>
                <div className='my-3 flex w-full overflow-x-hidden'>
                    <RecommendationBlock />
                </div>
            </div>
        </main>
    )
}

export async function getStaticProps() {
    const rulersFiles = fs.readdirSync(path.join('posts/persons'))
    const racesFiles = fs.readdirSync(path.join('posts/races'))
    const ethnicsFiles = fs.readdirSync(path.join('posts/ethnics'))

    const emperors = rulersFiles.map((filename) => {
        const slug = filename.replace('.mdx', '')

        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/persons', filename),
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
