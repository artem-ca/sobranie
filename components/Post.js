import Link from 'next/link'

export default function Post({ post }) {
    return (
        <section className='w-max'>
            <Link href={`/blog/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-52 w-40 rounded-xl'
                    />

                    <p className='font-semibold p-1'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}
