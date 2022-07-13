import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import { sortByDate } from '../../../utils'
import RaceCard from '../../../components/Races'
import BackButton from '../../../components/BackButton'
import RacesList from '../../../components/Races'

export default function Races({ posts }) {
    const router = useRouter()
    return (
        <div className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold '>Расы</div>

            <div className='m-auto mt-12 max-w-5xl'>
                <RacesList />

                {/* <div className='flex flex-wrap justify-center gap-20'>
                    {posts.map((post, index) => (
                        <RaceCard key={index} post={post} />
                    ))}
                </div> */}
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
        const slug = filename.replace('.mdx', '')

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
