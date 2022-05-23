import Link from 'next/link'
import Image from 'next/image'

const categories = [
    { id: 1, title: 'Политика', path: '/journal/politics' },
    { id: 2, title: 'История', path: '/journal/history' },
    { id: 3, title: 'Антропология', path: '/journal/anthropology' },
    { id: 4, title: 'Искусство', path: '/journal/art' },
]

export function JournalCategories() {
    return (
        <ul className='m-auto flex flex-wrap justify-center gap-6 gap-x-6 text-center text-2xl font-semibold'>
            {categories.map(({ id, title, path }) => (
                <li key={id}>
                    <Link key={id} href={path} passHref>
                        <a
                            className='rounded-xl border-2 border-strict-black px-3 py-1  transition delay-5 duration-100
                ease-in-out hover:bg-strict-black hover:text-pale-white
                dark:border-pale-white/90 dark:text-pale-white dark:hover:bg-pale-white 
                 dark:hover:text-strange-black'
                        >
                            {title}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default function Journal() {
    return (
        <main className='mx-auto '>
            <header className='py-16 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold sm:text-5xl'>
                    Журнал
                </h1>
                <p className='mb-7 tracking-wide text-slate-700 first-line:text-lg dark:text-pale-white/90'>
                    Интересные статьи на любимые темы.
                </p>
                <JournalCategories />
            </header>
            <Image
                className='absolute mx-auto rounded-3xl'
                src='/../public/canaletto_canal.jpg'
                alt='Picture of the author'
                layout='responsive'
                width={1200}
                height={857}
            />
            <Image
                className='absolute mx-auto rounded-3xl'
                src='/../public/Jan_Pieter_van_Bredael_(II)_-_Winter.jpg'
                alt='Picture of the author'
                layout='responsive'
                width={1200}
                height={857}
            />
        </main>
    )
}
