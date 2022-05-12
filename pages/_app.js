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
                    className='w-full m-auto flex rounded-3xl pb-16 bg-pale-white text-strange-black
                            dark:bg-strict-black  dark:text-pale-white  border-pale-white/50'
                >
                    <div className='max-w-8xl w-full m-auto min-h-screen font-montserrat'>
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
