import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    return (
        <>
            <div className='card card-page'>
                <Link href='/'>
                    <a className='flex w-max bg-gray-800  px-4 p-1 rounded-lg hover:bg-gray-900 font-semibold text-pale-white'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            stroke-width='2'>
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M10 19l-7-7m0 0l7-7m-7 7h18'
                            />
                        </svg>
                    </a>
                </Link>
                {/* <div className='post-title'>{title}</div> */}
                {/* <div className='post-date'>Posted on {date}</div> */}
                {/* <img src={cover_image} alt='' /> */}
                <div className='post-body'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: marked(content),
                        }}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMetadata)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
