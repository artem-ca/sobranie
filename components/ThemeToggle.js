import clsx from 'clsx'
import create from 'zustand'

import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'

const useSetting = create((set) => ({
    setting: 'system',
    setSetting: (setting) => set({ setting }),
}))

function update() {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark', 'changing-theme')
    } else {
        document.documentElement.classList.remove('dark', 'changing-theme')
    }
    window.setTimeout(() => {
        document.documentElement.classList.remove('changing-theme')
    })
}

let settings = [
    {
        value: 'light',
        label: 'Светлая',
        icon: SunIcon,
    },
    {
        value: 'dark',
        label: 'Темная',
        icon: MoonIcon,
    },
    {
        value: 'system',
        label: 'Система',
        icon: PcIcon,
    },
]

function SunIcon({ selected, ...props }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 delay-75 duration-500 ease-in-out hover:rotate-90 active:scale-110'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            {...props}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                className={selected ? 'stroke-amber-500' : 'stroke-slate-500'}
            />
        </svg>
    )
}

function MoonIcon({ selected, ...props }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 delay-75 duration-500 ease-in-out hover:rotate-45 hover:scale-90 active:scale-75'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            {...props}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                className={selected ? 'stroke-indigo-500' : 'stroke-slate-500'}
            />
        </svg>
    )
}

function PcIcon({ selected, ...props }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
            {...props}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                className={selected ? 'stroke-sky-500' : 'stroke-slate-500'}
            />
        </svg>
    )
}

function useTheme() {
    let { setting, setSetting } = useSetting()
    let initial = useRef(true)

    useIsomorphicLayoutEffect(() => {
        let theme = localStorage.theme
        if (theme === 'light' || theme === 'dark') {
            setSetting(theme)
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        update()
        if (setting === 'system') {
            localStorage.removeItem('theme')
        } else if (setting === 'light' || setting === 'dark') {
            localStorage.theme = setting
        }
        if (initial.current) {
            initial.current = false
        } else {
            update()
        }
    }, [setting])

    useEffect((setSetting) => {
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        if (mediaQuery?.addEventListener) {
            mediaQuery.addEventListener('change', update)
        } else {
            mediaQuery.addEventListener(update)
        }

        function onStorage() {
            update()
            let theme = localStorage.theme
            if (theme === 'light' || theme === 'dark') {
                setSetting(theme)
            } else {
                setSetting('system')
            }
        }
        window.addEventListener('storage', onStorage)

        return () => {
            if (mediaQuery?.removeEventListener) {
                mediaQuery.removeEventListener('change', update)
            } else {
                mediaQuery.removeEventListener(update)
            }

            window.removeEventListener('storage', onStorage)
        }
    }, [])

    return [setting, setSetting]
}

export function ThemeToggle({ panelClassName = 'mt-4' }) {
    let [setting, setSetting] = useTheme()

    return (
        <Listbox value={setting} onChange={setSetting}>
            <Listbox.Label className='sr-only'>Theme</Listbox.Label>
            <Listbox.Button type='button'>
                <span className='dark:hidden'>
                    <SunIcon
                        className='h-6 w-6'
                        selected={setting !== 'system'}
                    />
                </span>
                <span className='hidden dark:inline'>
                    <MoonIcon
                        className='h-6 w-6'
                        selected={setting !== 'system'}
                    />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter='transition-opacity duration-150'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <Listbox.Options
                    className={clsx(
                        'absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg border-0 bg-strict-black p-1 text-sm font-semibold text-slate-300 shadow-xl ring-0 dark:border',
                        panelClassName
                    )}
                >
                    {settings.map(({ value, label, icon: Icon }) => (
                        <Listbox.Option key={value} value={value} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={clsx(
                                        'flex cursor-pointer items-center gap-x-2 py-1 px-2 hover:rounded-md',
                                        selected && 'rounded-md font-bold',
                                        active && 'bg-slate-600/30'
                                    )}
                                >
                                    <Icon
                                        selected={selected}
                                        className='h-6 w-6'
                                    />
                                    {label}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}
