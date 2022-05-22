import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import { selectedRulerTitle } from '../pages/glossary/persons'

const rulerTitles = [
    {
        id: 1,
        rulerTitle: 'Император',
        title: 'Императоры',
        path: '/glossary/persons',
    },
    { id: 2, rulerTitle: 'Царь', title: 'Цари', path: '/glossary/ethnics' },
    { id: 3, rulerTitle: 'Король', title: 'Короли', path: '/glossary/races' },
    {
        id: 3,
        rulerTitle: 'Президент',
        title: 'Президенты',
        path: '/glossary/races',
    },
]

const rulerCountries = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'Германия' },
    { id: 3, name: 'Англия' },
    { id: 4, name: 'Швеция' },
    { id: 5, name: 'Дания' },
    { id: 6, name: 'Франция' },
    { id: 7, name: 'Польша' },
    { id: 8, name: 'Италия' },
]

export function SelectorIcon() {
    return (
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
                d='M8 9l4-4 4 4m0 6l-4 4-4-4'
            />
        </svg>
    )
}

export function CheckIcon() {
    return (
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
                d='M5 13l4 4L19 7'
            />
        </svg>
    )
}

export function SelectRulerTitle({}) {
    const [selected, setSelected] = useState(rulerTitles[0])

    return (
        <div className='mb-10 w-44 rounded-lg text-black ring-1 ring-strict-black  dark:text-pale-white dark:ring-0 '>
            <Listbox value={selected} onChange={setSelected}>
                <div className='relative'>
                    <Listbox.Button
                        className='flex w-full cursor-pointer items-center rounded-lg 
                                    bg-pale-white py-2 pl-3 pr-2 text-left text-sm shadow-md dark:bg-strict-black dark:ring-1 dark:ring-pale-white'
                    >
                        <span className='font-semibold'>{selected.title}</span>
                        <span className='ml-auto'>
                            <SelectorIcon className='mx-2' />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-in duration-100'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options
                            className='absolute  z-10 mt-1 max-h-60 w-full cursor-pointer items-center overflow-auto rounded-md 
                        bg-white py-1 text-base shadow-lg ring-1 ring-strict-black ring-opacity-70
                        focus:outline-none dark:bg-strict-black dark:ring-pale-white sm:text-sm'
                        >
                            {rulerTitles.map((person, personIdx) => (
                                <Listbox.Option
                                    className={({ active }) =>
                                        `relative mx-1 flex cursor-pointer select-none items-center rounded-md py-2 px-3 ${
                                            active
                                                ? 'bg-black/10 dark:bg-white/5'
                                                : 'text-black dark:text-pale-white'
                                        }`
                                    }
                                    key={personIdx}
                                    value={person}
                                    // onChange={console.log(selectedRulerTitle)}
                                    // onChange={
                                    //     (selectedRulerTitle =
                                    //         selected.rulerTitle)
                                    // }
                                >
                                    {({ selected }) => (
                                        <>
                                            {/* {selected ? (
                                                <span className='text-orange-300'>
                                                    <CheckIcon />
                                                </span>
                                            ) : null} */}

                                            <span
                                                className={`block truncate pl-1 ${
                                                    selected
                                                        ? 'font-semibold'
                                                        : 'font-medium'
                                                }`}
                                            >
                                                {person.title}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export function SelectRulerCountry() {
    const [selected, setSelected] = useState(rulerCountries[0])

    return (
        <section className='mb-10 w-44 rounded-lg text-black ring-1 ring-strict-black  dark:text-pale-white dark:ring-0 '>
            <Listbox value={selected} onChange={setSelected}>
                <div className='relative'>
                    <Listbox.Button
                        className='flex w-full cursor-pointer items-center rounded-lg 
                                    bg-pale-white py-2 pl-3 pr-2 text-left text-sm shadow-md dark:bg-strict-black dark:ring-1 dark:ring-pale-white'
                    >
                        <span className='font-semibold'>{selected.name}</span>
                        <span className='ml-auto'>
                            <SelectorIcon className='mx-2' />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-in duration-100'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options
                            className='absolute z-10 mt-1 max-h-80 w-full cursor-pointer items-center overflow-auto 
                        rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-strict-black ring-opacity-70
                        focus:outline-none dark:bg-strict-black dark:ring-pale-white sm:text-sm'
                        >
                            {rulerCountries.map((counrty, counrtyId) => (
                                <Listbox.Option
                                    className={({ active }) =>
                                        `relative mx-1 flex cursor-pointer select-none items-center rounded-md py-2 px-3 ${
                                            active
                                                ? 'bg-black/10 dark:bg-white/5'
                                                : 'text-black dark:text-pale-white'
                                        }`
                                    }
                                    key={counrtyId}
                                    value={counrty}
                                    // onChange={console.log(selectedRulerTitle)}
                                >
                                    {({ selected }) => (
                                        <>
                                            {/* {selected ? (
                                                <span className='text-orange-300'>
                                                    <CheckIcon />
                                                </span>
                                            ) : null} */}

                                            <span
                                                className={`block truncate pl-1 ${
                                                    selected
                                                        ? 'font-semibold'
                                                        : 'font-medium'
                                                }`}
                                            >
                                                {counrty.name}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </section>
    )
}

export default function RulersOptions() {
    return (
        <section className='mx-auto flex w-full flex-wrap justify-center gap-x-5 text-strict-black dark:text-pale-white md:flex-row md:justify-start'>
            <div>
                <span className='ml-1'>Титул:</span>
                <SelectRulerTitle />
            </div>
            <div>
                <span className='ml-1'>Страна:</span>
                <SelectRulerCountry />
            </div>
        </section>
    )
}
