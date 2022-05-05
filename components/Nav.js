import Link from 'next/link'

export default function Nav() {
    return (
        <section className='bg-black flex text-pale-white items-center justify-center font-bold p-5 '>
            <ul className='flex flex-row gap-x-7 mx-5'>
                <li>
                    <Link href='/'>
                        <a className='hover:text-rose-600 transition duration-300 delay-5 ease-in-out'>
                            Sobranie
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href='/persons'>
                        <a className='hover:text-orange-300 transition duration-300 delay-5 ease-in-out'>
                            Глоссарий
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/journal'>
                        <a>Журнал</a>
                    </Link>
                </li>
                <li>
                    <Link href='/courses'>
                        <a>Курсы</a>
                    </Link>
                </li>
                <li>
                    <Link href='/shop'>
                        <a>Магазин</a>
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
        </section>
    )
}
