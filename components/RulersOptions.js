import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

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

export function TestCounter() {
    const [count, setCount] = useState(0)
    function inc() {
        setCount(count + 1)
    }
    function dec() {
        setCount(count - 1)
    }
    return (
        <div className='my-10 mx-auto w-max text-center'>
            <h2 className='text-3xl'>{count}</h2>
            <div className='m-auto flex select-none items-center justify-center gap-x-3 text-center text-lg'>
                <button
                    onClick={dec}
                    className='flex w-max rounded-lg bg-red-400 px-3 py-2 font-semibold hover:bg-red-500'
                >
                    Dec -
                </button>
                <button
                    onClick={inc}
                    className='flex w-max rounded-lg bg-blue-450 px-3 py-2 font-semibold hover:bg-blue-600'
                >
                    Inc +
                </button>
            </div>
        </div>
    )
}

export function SelectOption({ options, option, setOption }) {
    const [selected, setSelected] = useState(options[0])

    setOption(selected.value)

    return (
        <div className='w-48 rounded-lg text-black ring-1 ring-strict-black  dark:text-pale-white dark:ring-0 '>
            <Listbox value={selected} onChange={setSelected}>
                <div className='relative'>
                    <Listbox.Button
                        className='flex w-full cursor-pointer items-center rounded-lg 
                                    bg-white py-2 pl-3 pr-2 text-left text-sm shadow-md dark:bg-strict-black dark:ring-1 dark:ring-pale-white'
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
                            className='absolute z-10 mt-1 w-full cursor-pointer items-center overflow-auto rounded-md 
                        bg-white py-1 text-base shadow-lg ring-1 ring-strict-black ring-opacity-70
                        focus:outline-none dark:bg-strict-black dark:ring-pale-white sm:text-sm'
                        >
                            {options.map((option, id) => (
                                <Listbox.Option
                                    className={({ active }) =>
                                        `relative mx-1 flex cursor-pointer select-none items-center rounded-md py-2 px-3 ${
                                            active
                                                ? 'bg-gray-100/50 dark:bg-white/5'
                                                : 'text-black dark:text-pale-white'
                                        }`
                                    }
                                    key={id}
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate pl-1 ${
                                                    selected
                                                        ? 'font-semibold'
                                                        : 'font-medium'
                                                }`}
                                            >
                                                {option.title}
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

export default function RulersOptions({
    category,
    setCategory,
    categories,
    country,
    countries,
    setCountry,
    rulerTitles,
    rulerTitle,
    setRulerTitle,
}) {
    return (
        <section className='mx-auto flex w-full flex-wrap justify-center gap-5 text-strict-black dark:text-pale-white md:flex-row md:justify-start'>
            <div>
                <SelectOption
                    options={categories}
                    option={category}
                    setOption={setCategory}
                />
            </div>
            {category === 'ruler' ? (
                <div>
                    <SelectOption
                        options={rulerTitles}
                        option={rulerTitle}
                        setOption={setRulerTitle}
                    />
                </div>
            ) : null}
            <div>
                <SelectOption
                    options={countries}
                    option={country}
                    setOption={setCountry}
                />
            </div>

            {/* <div>
                <span className='ml-1'>Титул:</span>
                <SelectOption options={rulerTitles} />
            </div> */}
        </section>
    )
}
