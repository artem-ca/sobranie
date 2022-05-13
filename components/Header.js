import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'

import { Popover, Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'

import clsx from 'clsx'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
    { id: 1, title: 'Глоссарий', path: '/glossary' },
    { id: 2, title: 'Журнал', path: '/journal' },
    { id: 3, title: 'Курсы', path: '/courses' },
    { id: 4, title: 'Магазин', path: '/shop' },
    // { id: 5, title: 'О нас', path: '/about' },
]

function BookmarkIcon() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5 hover:fill-pale-white cursor-pointer'
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
            class='cursor-pointer'
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
        <>
            {navigation.map(({ id, title, path }) => (
                <li key={id}>
                    <Link key={id} href={path} passHref>
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
        </>
    )
}

export function NavPopover({ display = 'md:hidden', className, ...props }) {
    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return
        function handleRouteChange() {
            setIsOpen(false)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [isOpen])

    return (
        <div className={clsx(className, display)} {...props}>
            <button
                type='button'
                className='flex w-8 h-8 items-center justify-center text-pale-white hover:text-pale-white/80'
                onClick={() => setIsOpen(true)}
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
            <Transition as={Fragment} show={isOpen}>
                <Dialog
                    as='div'
                    className={clsx('fixed z-50 inset-0', display)}
                    open={isOpen}
                    onClose={setIsOpen}
                >
                    <Dialog.Overlay className='fixed inset-0 backdrop-blur-sm bg-black/10' />

                    <Transition.Child
                        enter='transition ease-out duration-100'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                    >
                        <div
                            className='fixed top-5 right-7 max-w-xs w-full rounded-lg shadow-lg p-6 text-base font-semibold 
                  bg-strict-black text-pale-white dark:border-2 border-pale-white/50'
                        >
                            <button
                                type='button'
                                className='absolute top-4 right-4 w-9 h-9 flex items-center justify-center 
                                   hover:text-pale-white/80
                                   duration-500 delay-100 ease-in-out hover:rotate-90 active:scale-90'
                                onClick={() => setIsOpen(false)}
                            >
                                <span className='sr-only'>
                                    Close navigation
                                </span>
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
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                            <ul className='space-y-6 pb-6 border-b border-pale-white/70'>
                                <NavItems />
                            </ul>

                            <div className='flex items-center justify-between mx-auto gap-x-10 pt-6 w-max font-normal text-pale-white/80'>
                                <ProfileIcon />
                                <BookmarkIcon />
                                <ThemeToggle />
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
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
                    ? 'bg-strict-black/90 supports-backdrop-blur:bg-strict-black/10 dark:bg-strange-black/75'
                    : 'bg-strict-black supports-backdrop-blur:bg-strict-black/60 dark:bg-transparent'
            )}
        >
            <div className='flex-none text-pale-white font-bold max-w-8xl mx-auto w-full'>
                <div className='py-4 px-6 sm:px-8'>
                    <div className='relative flex items-center'>
                        <Link href='/' passHref>
                            <a
                                className='font-display mr-3 pl-1 hover:text-rose-600 transition duration-300 delay-5 ease-in-out'
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                    Router.push('/')
                                }}
                            >
                                <span className='sr-only'>
                                    Sobranie Home Page
                                </span>
                                Sobranie
                            </a>
                        </Link>

                        <div className='relative hidden md:flex items-center ml-auto'>
                            <nav className='leading-6'>
                                <ul className='flex gap-x-6 '>
                                    <NavItems />
                                </ul>
                            </nav>

                            <div className='flex gap-x-3 items-center border-l border-pale-white/60 ml-6 pl-5'>
                                <ThemeToggle panelClassName='mt-7' />

                                <Link href='/profile/bookmarks' passHref>
                                    <button
                                        type='button'
                                        className='w-8 h-8 -my-1 flex items-center justify-center'
                                    >
                                        <span className='sr-only'>
                                            Bookmarks
                                        </span>
                                        <BookmarkIcon />
                                    </button>
                                </Link>

                                <Link href='/profile' passHref>
                                    <button
                                        type='button'
                                        className='w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-300'
                                    >
                                        <span className='sr-only'>Profile</span>
                                        <ProfileIcon />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <NavPopover
                            className='-my-1 ml-auto'
                            display='md:hidden'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
