import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { useRouter } from 'next/router'

import { sortByDate } from '../../../utils'
import PersonCard from '../../../components/PersonCard'
import BackButton from '../../../components/BackButton'

// export async function TsarsList() {
//     return (
//         <div className='flex flex-wrap justify-evenly gap-10'>
//             {posts.map((post, index) => (
//                 <PersonCard key={index} post={post} />
//             ))}
//         </div>
//     )
// }

export default function Persons({ posts }) {
    return (
        <section className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold'>Цари</div>

            <div className='m-auto mt-12 max-w-5xl'>
                <div className='flex flex-wrap justify-evenly gap-10'>
                    {posts.map((post, index) => (
                        <PersonCard key={index} post={post} />
                    ))}
                </div>

                {/* <TsarsList /> */}
            </div>
        </section>
    )
}

export async function getStaticProps() {
    // Get files from the post dir
    const files = fs.readdirSync(path.join('posts/tsars'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
        const markdownWithMetadata = fs.readFileSync(
            path.join('posts/tsars', filename),
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
