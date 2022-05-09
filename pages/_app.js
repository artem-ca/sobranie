import '../styles/globals.css'
import Head from 'next/head'

import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <section className='bg-black'>
            <Head>
                <title className=''>Sobranie</title>
                <meta name='description' content='Founded by Zaidullin' />
                <link rel='icon' href='/CoatofRussianEmpire.ico' />
            </Head>

            <Nav />

            <main className='flex px-2 '>
                {/* <Sidebar /> */}
                <div className='w-full m-auto flex bg-pale-white dark:bg-black text-strange-black dark:text-slate-300  rounded-3xl pb-16'>
                    <div className='max-w-8xl w-full m-auto min-h-screen'>
                        <div className=' min-h-screen w-full rounded-3xl px-3'>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </section>
    )
}

export default MyApp
