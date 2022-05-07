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
                        <a className='mr-3 hover:text-rose-600 transition duration-300 delay-5 ease-in-out '>
                            Sobranie
                        </a>
                    </Link>

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
            </div>
        </section>
    )
}
