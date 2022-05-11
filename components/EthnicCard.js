import Link from 'next/link'

export default function EthnicCard({ post }) {
    return (
        <section
            className='w-max cursor-pointer transition duration-300 delay-10 ease-in-out 
                        transform hover:-translate-y-1'
        >
            <Link href={`/glossary/ethnics/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='w-120 rounded-xl border-2 dark:border-0 border-strict-black'
                    />

                    <p className='text-2xl font-semibold font-serif mt-2 mx-auto text-center w-32'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}
