import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import PersonCard from '../components/PersonCard'
import Post from '../components/Post'

import { sortByDate } from '../utils'

export default function Journal({ posts }) {
    return (
        <section>
            <div className='text-3xl font-bold text-center m-10'>Журнал</div>

            <div className='gap-5'>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMetadata = fs.readFileSync(
            path.join('posts', filename),
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
