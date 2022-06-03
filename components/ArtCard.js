import Link from 'next/link'
import Image from 'next/image'

export default function ArtCard({ imgSrc }) {
    return (
        <section className='group m-auto max-w-sm cursor-pointer select-none rounded-xl shadow-lg'>
            <div className='overflow-hidden rounded-t-xl '>
                <Image
                    className='rounded-t-xl transition delay-100 duration-400 group-hover:scale-105'
                    src={imgSrc}
                    alt='Picture of the author'
                    layout='responsive'
                    width={1200}
                    height={857}
                />
                <p className='rounded-b-xl p-5 text-sm dark:bg-pale-white/10 xs:text-base'>
                    Картина так сказать маслом. И вот вытягиваю я этого карпа -
                    он где-то килограмм 7-8
                </p>
            </div>
        </section>
    )
}
