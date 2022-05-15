import Link from 'next/link'
import { useRouter } from 'next/router'

const categories = [
    { id: 1, title: 'Личности', path: '/glossary/persons' },
    { id: 2, title: 'Этносы', path: '/glossary/ethnics' },
    { id: 3, title: 'Расы', path: '/glossary/races' },
    { id: 4, title: 'Слова', path: '/glossary/words' },
]

export function GlossaryCategories() {
    return (
        <ul className='m-auto flex flex-wrap justify-center gap-6 gap-x-6 text-center text-2xl font-semibold'>
            {categories.map(({ id, title, path }) => (
                <li key={id}>
                    <Link key={id} href={path} passHref>
                        <a
                            className='rounded-xl border-2 border-strict-black px-3 py-1 transition delay-5 duration-100
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

export default function Glossary() {
    return (
        <main className='mx-auto max-w-5xl'>
            <header className='py-16 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold sm:text-5xl'>
                    Глоссарий
                </h1>
                <p className='mb-7 tracking-wide text-slate-700 first-line:text-lg dark:text-pale-white/90'>
                    Энциклопедия, которую ты заслужил.
                </p>
                <GlossaryCategories />
            </header>
        </main>
    )
}
