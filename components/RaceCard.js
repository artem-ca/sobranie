import Link from 'next/link'

export default function RaceCard({ post }) {
    return (
        <section
            className='w-max transform cursor-pointer transition delay-10 
                        duration-500 ease-in-out hover:-translate-y-2'
        >
            <Link href={`/glossary/races/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-60 w-48 rounded-xl'
                    />

                    <p className='mx-auto mt-2 w-32 text-center font-semibold'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}
