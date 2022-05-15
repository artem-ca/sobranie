import '../styles/globals.css'

import Head from 'next/head'
import Header from '../components/Header'

import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <section className='bg-strict-black'>
            <Head>
                <title className=''>Sobranie</title>
                <meta name='description' content='Founded by Zaidullin' />
                <link rel='icon' href='/CoatofRussianEmpire.ico' />
            </Head>

            <Header />

            <main className='flex px-2 '>
                <div
                    className='m-auto flex w-full rounded-3xl border-pale-white/50 bg-pale-white pb-16
                            text-slate-900  dark:bg-strict-black  dark:text-pale-white'
                >
                    <div className='m-auto min-h-screen w-full max-w-8xl font-montserrat'>
                        <div className=' min-h-screen w-full rounded-3xl px-3'>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}

export default MyApp
