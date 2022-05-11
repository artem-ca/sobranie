import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import clsx from 'clsx'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
    { id: 1, title: 'Глоссарий', path: '/glossary' },
    { id: 2, title: 'Журнал', path: '/journal' },
    { id: 3, title: 'Курсы', path: '/courses' },
    { id: 4, title: 'Магазин', path: '/shop' },
]

function BookmarkIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5 hover:fill-pale-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
            />
        </svg>
    )
}

function ProfileIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
            width='24'
            height='24'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
        </svg>
    )
}

export function NavItems() {
    const { pathname } = useRouter()

    return (
        <ul className='md:flex gap-x-6  ml-auto hidden'>
            {navigation.map(({ id, title, path }) => (
                <li>
                    <Link key={id} href={path}>
                        <a
                            className={
                                '/' + pathname.split('/')[1] === path
                                    ? 'text-orange-300'
                                    : 'hover:text-orange-300 transition duration-300 delay-5 ease-in-out'
                            }
                        >
                            {title}
                        </a>
                    </Link>
                </li>
            ))}

            {/* <li>
                <Link href='/oldhome'>
                    <a className='text-blue-600 font-semibold hover:text-blue-800'>
                        old
                    </a>
                </Link>
            </li> */}
        </ul>
    )
}

export default function Header() {
    let [isOpaque, setIsOpaque] = useState(false)

    useEffect(() => {
        let offset = 50
        function onScroll() {
            if (!isOpaque && window.scrollY > offset) {
                setIsOpaque(true)
            } else if (isOpaque && window.scrollY <= offset) {
                setIsOpaque(false)
            }
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll, { passive: true })
        }
    }, [isOpaque])

    return (
        <section
            className={clsx(
                'sticky top-0 z-40 w-full flex-none lg:z-50 dark:border-b backdrop-blur transition-colors duration-700',
                isOpaque
                    ? 'bg-strict-black/90 supports-backdrop-blur:bg-strict-black/10 dark:bg-strict-black/75'
                    : 'bg-strict-black supports-backdrop-blur:bg-strict-black/60 dark:bg-transparent'
            )}
        >
            <div className='flex-none text-pale-white font-bold max-w-8xl mx-auto w-full'>
                <div className='py-4 px-4 md:px-8'>
                    <div className='relative flex items-center'>
                        <Link href='/'>
                            <a className='font-display mr-3 pl-1 hover:text-rose-600 transition duration-300 delay-5 ease-in-out '>
                                Sobranie
                            </a>
                        </Link>

                        <div className='ml-auto flex'>
                            {/* <div className='lg:flex bg-white rounded-lg mr-6 hidden ml-auto'> */}
                            {/* <input
                                    className='rounded-lg px-3 text-black outline-none pr-3'
                                    type='text'
                                /> */}

                            <button
                                type='button'
                                className='ml-auto w-8 h-8 -my-1 flex items-center 
                                   justify-center hover:text-slate-300 mr-3'
                            >
                                <span className='sr-only'>Search</span>
                                <svg
                                    width='24'
                                    height='24'
                                    fill='none'
                                    stroke='white'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    aria-hidden='true'
                                >
                                    <path d='m19 19-3.5-3.5'></path>
                                    <circle cx='11' cy='11' r='6'></circle>
                                </svg>
                            </button>
                            {/* </div> */}

                            <NavItems />
                        </div>
                        <div className='hidden md:flex ml-6 pl-6 items-center border-l border-slate-500 gap-x-3'>
                            <ThemeToggle panelClassName='mt-7' />

                            <Link href='/profile/bookmarks'>
                                <button
                                    type='button'
                                    className='w-8 h-8 -my-1 flex items-center 
                                justify-center '
                                >
                                    <span className='sr-only'>Bookmarks</span>
                                    <BookmarkIcon />
                                </button>
                            </Link>

                            <Link href='/profile'>
                                <button
                                    type='button'
                                    className='w-8 h-8 -my-1 flex items-center 
                                justify-center hover:text-slate-300'
                                >
                                    <span className='sr-only'>Profile</span>
                                    <ProfileIcon />
                                </button>
                            </Link>
                        </div>

                        <button
                            type='button'
                            className='w-8 h-8 -my-1 flex items-center ml-auto
                                    justify-center hover:text-slate-300 md:hidden'
                        >
                            <span className='sr-only'>Navigation</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                class='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                stroke-width='2'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
