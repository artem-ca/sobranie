import { SearchIcon } from './Header'

export default function SearchButton() {
    return (
        <section
            className='m-auto mt-9 hidden w-80 cursor-pointer items-center space-x-3 rounded-lg bg-pale-white py-2 
        px-5 text-left text-strict-black/40 shadow-sm ring-1 ring-strict-black/10 
        hover:text-strict-black/60  hover:shadow-md hover:ring-strange-black/10 dark:bg-strange-black
        dark:text-slate-200 dark:ring-2 dark:ring-pale-white/30 dark:hover:bg-strict-black dark:hover:ring-pale-white/40 sm:flex'
        >
            <SearchIcon />

            <span className='mt-1 flex-auto font-semibold'>Найти...</span>
        </section>
    )
}
