function AdminSidebar() {
    return (
        <section className='h-full border-r-2 border-strict-black p-14 '>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
        </section>
    )
}

export default function Admin() {
    return (
        <section>
            <header className='pt-14 pb-8 text-center'>
                <h1 className='mb-4 text-center font-display text-4xl font-bold '>
                    Admin.
                </h1>
            </header>

            <div className='mx-auto flex max-w-5xl justify-center'>
                <div className='m-auto flex h-120 w-full max-w-4xl rounded-xl text-center ring-2 ring-strict-black dark:ring-pale-white'>
                    <AdminSidebar />

                    <div className='m-auto flex h-full w-full px-10 pt-14 text-center'>
                        <p>Field</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
