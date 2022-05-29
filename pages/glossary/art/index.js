import Link from 'next/link'
import Image from 'next/image'
import BackButton from '../../../components/BackButton'
import ArtsList from '../../../components/ArtsList'

export default function Art() {
    return (
        <section className='mx-auto'>
            <BackButton />

            <h2 className='mb-10 text-center text-2xl font-bold sm:text-3xl'>
                Искусство
            </h2>

            <ArtsList />
        </section>
    )
}
