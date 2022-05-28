import Link from 'next/link'
import Image from 'next/image'
import BackButton from '../../../components/BackButton'

export default function Art() {
    return (
        <section className='mx-auto'>
            <BackButton />

            <h2 className='text-center text-2xl font-bold sm:text-3xl'>
                Искусство
            </h2>

            <div className='m-auto mt-10 max-w-5xl'>
                <div className='group absolute  m-auto max-w-sm cursor-pointer select-none rounded-xl shadow-lg dark:shadow-purple-400'>
                    <div className=' rounded-t-xl bg-red-500'>
                        <Image
                            className='static rounded-xl transition delay-100 duration-300 group-hover:scale-105'
                            src='/../public/canaletto_canal.jpg'
                            alt='Picture of the author'
                            layout='responsive'
                            width={1200}
                            height={857}
                        />
                    </div>
                    <p className=' rounded-b-xl p-5'>
                        Картина так сказать маслом. И вот вытягиваю я этого
                        карпа - он где-то килограмм 7-8
                    </p>
                </div>
            </div>
        </section>
    )
}
