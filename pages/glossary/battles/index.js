import Head from 'next/head'
import { useRouter } from 'next/router'

import BackButton from '../../../components/BackButton'
import BattlesList from '../../../components/Battles'

export default function Ethnics({}) {
    return (
        <div className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold '>Битвы</div>

            <div className='m-auto mt-12 max-w-5xl'>
                <BattlesList />
            </div>
        </div>
    )
}
