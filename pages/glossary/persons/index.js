import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import BackButton from '../../../components/BackButton'
import PesronsList from '../../../components/PersonsList'
import PersonsOptions from '../../../components/PersonsOptions'
import { useState } from 'react'

const personCategories = [
    { id: 0, value: 'all', title: 'Категория' },
    { id: 1, value: 'ruler', title: 'Правитель' },
    { id: 2, value: 'politician', title: 'Политик' },
    { id: 3, value: 'commander', title: 'Полководец' },
    { id: 4, value: 'painter', title: 'Художник' },
    { id: 5, value: 'writer', title: 'Писатель' },
    { id: 6, value: 'actor', title: 'Актёр' },
    { id: 7, value: 'scientist', title: 'Учёный' },
]

const personCountries = [
    { id: 0, value: 'all', title: 'Страна' },
    { id: 1, value: 'Россия', title: 'Россия' },
    { id: 2, value: 'Германия', title: 'Германия' },
    { id: 3, value: 'United Kingdom', title: 'Великобритания' },
    { id: 4, value: 'Швеция', title: 'Швеция' },
    { id: 5, value: 'Дания', title: 'Дания' },
    { id: 6, value: 'Франция', title: 'Франция' },
    { id: 7, value: 'Польша', title: 'Польша' },
    { id: 8, value: 'Италия', title: 'Италия' },
]

const rulerTitles = [
    { id: 0, value: 'all', title: 'Титул' },
    { id: 1, value: 'emperor', title: 'Император' },
    { id: 2, value: 'tsar', title: 'Царь' },
    { id: 3, value: 'king', title: 'Король' },
    { id: 3, value: 'president', title: 'Президент' },
]

export default function Persons({ emperors, tsars }) {
    // var { pathname } = useRouter()
    // const paths = pathname.split('/')
    // console.log(paths)

    const [category, setCategory] = useState(personCategories[0].value)
    const [country, setCountry] = useState(personCountries[0].value)
    const [rulerTitle, setRulerTitle] = useState(rulerTitles[0].value)

    return (
        <section className='mx-auto'>
            <BackButton />

            <h2 className='text-center text-2xl font-bold sm:text-3xl'>
                Личности
            </h2>

            <div className='m-auto mt-10 max-w-5xl'>
                <PersonsOptions
                    categories={personCategories}
                    category={category}
                    setCategory={setCategory}
                    countries={personCountries}
                    country={country}
                    setCountry={setCountry}
                    rulerTitles={rulerTitles}
                    rulerTitle={rulerTitle}
                    setRulerTitle={setRulerTitle}
                />

                <div className='mt-10'>
                    <PesronsList
                        category={category}
                        country={country}
                        rulerTitle={rulerTitle}
                    />
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const rulersFiles = fs.readdirSync(path.join('posts/persons'))

    // Get slug and frontmatter from posts
    const rulers = rulersFiles.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
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

    return {
        props: {
            emperors: rulers.filter(
                (emperor) => emperor.frontmatter.rulerTitle === 'Император'
            ),
            tsars: rulers.filter(
                (emperor) => emperor.frontmatter.rulerTitle === 'Царь'
            ),
        },
    }
}
