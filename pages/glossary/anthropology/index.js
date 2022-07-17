import Head from 'next/head'
import Link from 'next/link'

import BackButton from '../../../components/BackButton'
import { EthnicsList } from '../../../components/Ethnics'
import RacesList from '../../../components/Races'

export default function Anthropology({}) {
    return (
        <div className='mx-auto max-w-5xl'>
            <BackButton />

            <h2 className='text-center text-2xl font-bold sm:text-3xl'>
                Антропология
            </h2>

            <div className='m-auto mt-5 max-w-5xl'>
                <div className='flex flex-col gap-y-7'>
                    <Link href='/glossary/races'>
                        <a className='text-center font-cormorantinfant text-2xl font-semibold'>
                            Расы
                        </a>
                    </Link>
                    <RacesList />
                    <Link href='/glossary/ethnics'>
                        <a className='text-center font-cormorantinfant text-2xl font-semibold'>
                            Этносы
                        </a>
                    </Link>
                    <EthnicsList />
                </div>
            </div>
        </div>
    )
}
