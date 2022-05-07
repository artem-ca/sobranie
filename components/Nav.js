import Link from 'next/link'

export default function Nav() {
    return (
        <section
            className='bg-black flex-none text-pale-white font-bold 
        max-w-8xl mx-auto w-full'
        >
            <div className='py-4 px-4 lg:px-8'>
                <div className='relative flex items-center'>
                    <Link href='/'>
                        <a className='mr-3 pl-1 hover:text-rose-600 transition duration-300 delay-5 ease-in-out '>
                            Sobranie
                        </a>
                    </Link>

                    <div className='flex ml-auto '>
                        <div className='flex bg-white rounded-lg mr-7 group'>
                            <input
                                className='rounded-lg px-3 text-black outline-none pr-3'
                                type='text'
                            />

                            <button
                                type='button'
                                className='ml-auto w-8 h-8 -my-1 flex items-center 
                                   justify-center hover:text-slate-300 mr-2'
                            >
                                <span className='sr-only'>Search</span>
                                <svg
                                    width='24'
                                    height='24'
                                    fill='none'
                                    stroke='black'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    aria-hidden='true'
                                >
                                    <path d='m19 19-3.5-3.5'></path>
                                    <circle cx='11' cy='11' r='6'></circle>
                                </svg>
                            </button>
                        </div>

                        <ul className='flex gap-x-7 mx-5 ml-auto'>
                            <li>
                                <Link href='/persons'>
                                    <a className='hover:text-orange-300 transition duration-300 delay-5 ease-in-out'>
                                        Глоссарий
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/journal'>
                                    <a className='hover:text-blue-400 transition duration-300 delay-5 ease-in-out'>
                                        Журнал
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/courses'>
                                    <a className='hover:text-emerald-500 transition duration-300 delay-5 ease-in-out'>
                                        Курсы
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/shop'>
                                    <a className='hover:text-zinc-400 transition duration-300 delay-5 ease-in-out'>
                                        Магазин
                                    </a>
                                </Link>
                            </li>

                            {/* <li>
                    <Link href='/oldhome'>
                        <a className='text-blue-600 font-semibold hover:text-blue-800'>
                            old
                        </a>
                    </Link>
                </li> */}
                        </ul>
                    </div>
                    <div className='flex ml-5 pl-5 items-center border-l border-slate-400 gap-x-3'>
                        <button
                            type='button'
                            className='w-8 h-8 -my-1 flex items-center 
                                    justify-center hover:text-slate-300'
                        >
                            <span className='sr-only'>Theme</span>
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
                                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                />
                            </svg>
                        </button>

                        <button
                            type='button'
                            className='w-8 h-8 -my-1 flex items-center 
                                    justify-center hover:text-slate-300'
                        >
                            <span className='sr-only'>Profile</span>
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
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
