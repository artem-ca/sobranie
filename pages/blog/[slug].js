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
            <div className=''>
                <div className='flex px-4 pt-8 pb-10 lg:px-8'>
                    <Link href='/persons'>
                        <a className='group flex font-semibold text-sm leading-6 text-slate-500 hover:text-slate-700 font-montserrat'>
                            <svg
                                viewBox='0 -9 3 24'
                                class='overflow-visible mr-3 text-slate-500 w-auto h-6 group-hover:text-slate-700 '
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
                    </Link>
                </div>
                <div
                    className='text-lg font-montserrat max-w-5xl mx-auto'
                    dangerouslySetInnerHTML={{
                        __html: marked(content),
                    }}
                ></div>
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
