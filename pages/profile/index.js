import Link from 'next/link'

export default function Profile() {
    return (
        <div>
            <header className='pt-14 pb-8 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold '>
                    Профиль
                </h1>
            </header>

            <div className='mx-auto max-w-3xl'>
                <h2 className='font-comfortaa text-3xl font-semibold'>
                    Artem Zaidullin
                </h2>

                <div className='my-7 flex gap-x-5 font-montserrat text-xl font-medium'>
                    <p className='font-bold'>Закладки</p>
                    <p>Подписки</p>
                    <p>Личные данные</p>
                </div>
            </div>
        </div>
    )
}
