import Link from 'next/link'

export default function EthnicCard({ post }) {
    return (
        <section
            className=' max-w-md transform cursor-pointer overflow-hidden 
                        transition delay-10 duration-300 ease-in-out '
        >
            <Link href={`/glossary/ethnics/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-72 w-[448px] rounded-xl border-2  border-strict-black dark:border-0'
                    />

                    <p className='mx-auto mt-2 w-32 text-center font-serif text-2xl font-semibold'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}
