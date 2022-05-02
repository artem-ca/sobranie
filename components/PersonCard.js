import Head from 'next/head'

export default function PersonCard() {
    return (
        <section className='mx-32 flex-col'>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mikola_II_%28cropped%29-2.jpg/274px-Mikola_II_%28cropped%29-2.jpg'
                alt='Николай II'
                className='rounded-xl h-96 w-72'
            />
            <h1 className='text-2xl font-semibold mt-2 text-center'>
                Николай II
            </h1>
        </section>
    )
}
