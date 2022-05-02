import Link from 'next/link'

export default function Nav() {
    return (
        <section className=' bg-black flex text-white items-center font-bold p-5 '>
            <ul className='flex flex-row gap-x-7 mx-5'>
                <li>
                    <Link href='/'>
                        <a className='text-red-400'>Sobranie</a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a>Главная</a>
                    </Link>
                </li>
                <li>
                    <Link href='/persons'>
                        <a>Люди</a>
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
                <li>
                    <Link href='/oldhome'>
                        <a className='text-blue-600 font-semibold hover:text-blue-800'>
                            old
                        </a>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
