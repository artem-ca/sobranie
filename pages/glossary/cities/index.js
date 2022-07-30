import CitiesList from '../../../components/Cities'

import BackButton from '../../../components/BackButton'

export default function Cities({}) {
    return (
        <div className='mx-auto'>
            <BackButton />

            <div className='text-center text-3xl font-bold '>Города</div>

            <div className='m-auto mt-12 max-w-5xl'>
                <CitiesList />
            </div>
        </div>
    )
}
