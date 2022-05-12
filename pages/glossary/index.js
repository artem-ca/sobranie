import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Glossary() {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='text-3xl font-bold text-center mt-10'>
                Глоссарий
            </div>

            <ul className='flex flex-wrap mt-10 font-semibold gap-6 text-center m-auto justify-center text-2xl gap-x-6'>
                <li>
                    <Link href='/glossary/persons'>
                        <a
                            className='px-3 py-1 border-2 rounded-xl transition duration-100 delay-5 ease-in-out
                        hover:bg-strict-black hover:text-pale-white border-strict-black
                        dark:text-pale-white dark:border-pale-white/90 dark:hover:text-strange-black 
                         dark:hover:bg-pale-white'
                        >
                            Личности
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/glossary/ethnics'>
                        <a
                            className='px-3 py-1 border-2 rounded-xl transition duration-100 delay-5 ease-in-out
                        hover:bg-strict-black hover:text-pale-white border-strict-black
                        dark:text-pale-white dark:border-pale-white/90 dark:hover:text-strange-black 
                         dark:hover:bg-pale-white'
                        >
                            Этносы
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/glossary/races'>
                        <a
                            className='px-3 py-1 border-2 rounded-xl transition duration-100 delay-5 ease-in-out
                        hover:bg-strict-black hover:text-pale-white border-strict-black
                        dark:text-pale-white dark:border-pale-white/90 dark:hover:text-strange-black 
                         dark:hover:bg-pale-white'
                        >
                            Расы
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/glossary/words'>
                        <a
                            className='px-3 py-1 border-2 rounded-xl transition duration-100 delay-5 ease-in-out
                        hover:bg-strict-black hover:text-pale-white border-strict-black
                        dark:text-pale-white dark:border-pale-white/90 dark:hover:text-strange-black 
                         dark:hover:bg-pale-white'
                        >
                            Слова
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
