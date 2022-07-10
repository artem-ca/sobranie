import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import { sortByDate, sortByTitle, sortForEthnics } from '../../../utils'
import BackButton from '../../../components/BackButton'
import { EthnicsList } from '../../../components/Ethnics'

export default function Ethnics({ posts }) {
    const router = useRouter()
    return (
        <div className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold '>Этносы</div>

            <div className='m-auto mt-12 max-w-5xl'>
                {/* <div className='flex flex-wrap justify-center gap-x-20 gap-y-10'>
                    {posts.map((post, index) => (
                        <EthnicCard key={index} post={post} />
                    ))}
                </div> */}
                <EthnicsList />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts/ethnics'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
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
            posts: posts.sort(sortForEthnics),
        },
    }
}
