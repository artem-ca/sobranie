import { useRouter } from 'next/router'
import BackButton from '../../components/BackButton'

export default function Words() {
    const router = useRouter()
    return (
        <>
            <BackButton />
            <div className='text-center text-3xl font-bold'>Слова</div>
        </>
    )
}
