import '../styles/globals.css'
import Head from 'next/head'

import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
    return (
        <section className='bg-black '>
            <Head>
                <title className=''>Sobranie</title>
                <meta name='description' content='Founded by Zaidullin' />
                <link rel='icon' href='/CoatofRussianEmpire.ico' />
            </Head>

            <div className='flex'>
                <Nav />

                <a
                    href='/'
                    className='text-pale-white self-center items-center m-auto'>
                    Sobranie
                </a>
            </div>

            <main className='flex pr-10'>
                <Sidebar />
                <div className='w-full m-auto flex bg-pale-white rounded-3xl'>
                    <div className='max-w-5xl w-full m-auto min-h-screen'>
                        <div className='bg-white min-h-screen w-full rounded-3xl p-3'>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default MyApp
