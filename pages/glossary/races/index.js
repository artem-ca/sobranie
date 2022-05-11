import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import { sortByDate } from '../../../utils'
import PersonCard from '../../../components/PersonCard'
import RaceCard from '../../../components/RaceCard'

export default function Races({ posts }) {
    const router = useRouter()
    return (
        <div className='mx-auto'>
            <div className='flex px-4 pt-8 pb-10 lg:px-8'>
                <button onClick={(e) => router.back() && e.preventDefault()}>
                    <a
                        className='group flex font-semibold text-sm leading-6 font-montserrat 
                        text-slate-600 hover:text-slate-500 dark:text-slate-300 dark:hover:opacity-80'
                    >
                        <svg
                            viewBox='0 -9 3 24'
                            class='overflow-visible mr-3 w-auto h-6 text-slate-600  dark:text-slate-300 dark:hover:opacity-80'
                        >
                            <path
                                d='M3 0L0 3L3 6'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            ></path>
                        </svg>
                        Назад
                    </a>
                </button>
            </div>

            <div className='text-3xl font-bold text-center '>Расы</div>

            <div className='mt-12 max-w-5xl m-auto'>
                <div className='flex flex-wrap gap-20 justify-center'>
                    {posts.map((post, index) => (
                        <RaceCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts/races'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
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

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}
