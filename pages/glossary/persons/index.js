import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import Link from 'next/link'

import { sortByDate } from '../../../utils'
import PersonCard from '../../../components/PersonCard'
import BackButton from '../../../components/BackButton'

const rulerTitles = [
    { id: 1, title: 'Императоры', path: '/glossary/persons' },
    { id: 2, title: 'Цари', path: '/glossary/ethnics' },
    { id: 3, title: 'Короли', path: '/glossary/races' },
]

export default function Persons({ posts }) {
    var { pathname } = useRouter()
    const paths = pathname.split('/')
    console.log(paths)

    return (
        <section className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold'>Императоры</div>

            <div className='m-auto mt-12 max-w-5xl'>
                <div className='flex flex-wrap justify-evenly gap-10'>
                    {posts.map((post, index) => (
                        <PersonCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts/rulers/emperors'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/rulers/emperors', filename),
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
            posts: posts.sort(sortByDate),
        },
    }
}
