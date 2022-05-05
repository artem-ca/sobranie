// import Head from 'next/head'
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'

// import Link from 'next/link'

// import Post from '../components/Post'

// import { sortByDate } from '../utils'
// import PersonCard from './PersonCard'

// export default function Posts({ posts }) {
//     return (
//         <section>
//             <div className='mt-12'>
//                 <div className='flex flex-wrap gap-10'>
//                     {posts.map((post, index) => (
//                         // <Post key={index} post={post} />
//                         <PersonCard key={index} post={post} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export async function getStaticProps() {
//     // Get files from the post dir
//     const files = fs.readdirSync(path.join('posts'))

//     // Get slug and frontmatter from posts
//     const posts = files.map((filename) => {
//         // Create slug
//         const slug = filename.replace('.md', '')

//         // Get frontmatter
//         const markdownWithMetadata = fs.readFileSync(
//             path.join('posts', filename),
//             'utf-8'
//         )

//         const { data: frontmatter } = matter(markdownWithMetadata)

//         return {
//             slug,
//             frontmatter,
//         }
//     })

//     return {
//         props: {
//             posts: posts.sort(sortByDate),
//         },
//     }
// }
