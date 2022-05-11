import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    const router = useRouter()

    return (
        <>
            <div className=''>
                <div className='flex px-4 pt-8 pb-10 lg:px-8'>
                    <button
                        onClick={(e) => router.back() && e.preventDefault()}
                    >
                        <a
                            className='group flex font-semibold text-sm leading-6 font-montserrat 
                        text-slate-600 hover:text-slate-500 dark:text-slate-300 dark:hover:opacity-80
'
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
    const files = fs.readdirSync(path.join('posts/tsars'))

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
        path.join('posts/tsars', slug + '.md'),
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
