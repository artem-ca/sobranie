import Link from 'next/link'

export default function RaceCard({ post }) {
    return (
        <section
            className='w-max cursor-pointer transition duration-300 delay-10 ease-in-out 
                        transform hover:-translate-y-2'
        >
            <Link href={`/glossary/races/${post.slug}`}>
                <a className=''>
                    <img
                        src={post.frontmatter.cover_image}
                        alt=''
                        className='h-52 w-40 rounded-xl'
                    />

                    <p className='font-semibold mt-2 mx-auto text-center w-32'>
                        {post.frontmatter.title}
                    </p>
                </a>
            </Link>
        </section>
    )
}
