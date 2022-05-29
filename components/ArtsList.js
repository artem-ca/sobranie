import Link from 'next/link'
import Image from 'next/image'
import ArtCard from './ArtCard'

export default function ArtsList() {
    return (
        <section className='flex flex-wrap gap-20 '>
            <ArtCard imgSrc={'/../public/canaletto_canal.jpg'} />

            <ArtCard
                imgSrc={'/../public/Jan_Pieter_van_Bredael_(II)_-_Winter.jpg'}
            />

            {/* <ArtCard imgSrc={'/../public/scale_1200.webp'} /> */}
        </section>
    )
}
