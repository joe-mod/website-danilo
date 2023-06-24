import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Links() {
    return (
        <>
            <section id='Links' className='bg-[#282727] bg-opacity-90'>
                <div className='flex flex-col justify-center items-center pt-20 text-3xl tablet:flex-col'>
                    <header className=''>
                        <h1>
                            <span className='text-5xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Links</span>
                        </h1>
                    </header>
                </div>
                <div className=''>
                    <ul className='flex flex-row justify-center items-center pt-10 pb-20 space-x-20 text-3xl tablet:space-x-0 tablet:space-y-20 tablet:flex-col tablet:space-y4 tablet:justify-center tablet:items-center'>
                        <li>
                            <div className='group relative'>
                                <Link href="https://www.snautz.de/a/hund/danilo-von-den-bruener-hoehen-277602494">
                                    <Image src='https://www.snautz.de/sites/all/themes/custom/snautz_bootstrap/logo.png' width="250" height="250" alt='snautz' />
                                </Link>
                                <div className='group-hover:opacity-70 opacity-0 absolute inset-0 z-10 flex justify-center items-center pointer-events-none'>
                                    <p className='w-full h-full font-bold rounded-md bg-black group relative flex justify-center items-center text-orange-400 tablet:text-base'>Hier klicken</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='group relative'>
                                <Link href="https://www.bsv2010.de/">
                                    <Image src="/Images/bsv-logo-large.png" width="250" height="250" alt='bsv' />
                                </Link>
                                <div className='group-hover:opacity-70 opacity-0 absolute inset-0 z-5 flex justify-center items-center pointer-events-none'>
                                    <p className='w-full h-full font-bold rounded-md bg-black group relative flex justify-center items-center text-orange-400 tablet:text-base'>Hier klicken</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Links