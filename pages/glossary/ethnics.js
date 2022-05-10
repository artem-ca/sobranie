import { useRouter } from 'next/router'

export default function Ethnics() {
    const router = useRouter()
    return (
        <div className='mx-auto'>
            <div className='flex px-4 pt-8 pb-10 lg:px-8'>
                <button onClick={(e) => router.back() && e.preventDefault()}>
                    <a
                        className='group flex font-semibold text-sm leading-6 font-montserrat 
                        text-slate-600 hover:text-slate-500 dark:text-slate-300 dark:hover:opacity-80'
                    >
                        <svg
                            viewBox='0 -9 3 24'
                            class='overflow-visible mr-3 w-auto h-6 text-slate-600  dark:text-slate-300 dark:hover:opacity-80'
                        >
                            <path
                                d='M3 0L0 3L3 6'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            ></path>
                        </svg>
                        Назад
                    </a>
                </button>
            </div>
            <div className='text-3xl font-bold text-center '>Этносы</div>
        </div>
    )
}
