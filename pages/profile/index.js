import Link from 'next/link'

export default function Profile() {
    return (
        <div>
            <div className='text-3xl font-bold text-center m-10'>Профиль</div>

            <div className='max-w-5xl mx-auto'>
                <Link href='/profile/bookmarks'>
                    <a className='hover:text-orange-200'>Закладки</a>
                </Link>
            </div>
        </div>
    )
}
