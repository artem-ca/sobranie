import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BackButton from '../../../components/BackButton'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) {
    const router = useRouter()

    return (
        <>
            <div className=''>
                <BackButton />
                <div
                    className='mx-auto max-w-5xl font-montserrat text-lg'
                    dangerouslySetInnerHTML={{
                        __html: marked(content),
                    }}
                ></div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts/rulers'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(
        path.join('posts/rulers', slug + '.mdx'),
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
