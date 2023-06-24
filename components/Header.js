import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

function Header() {
    return (
        <>
            <div id='Start' className=''>
                <Image 
                    priority
                    placeholderSrc='https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680096084/DSC_8781-Bearbeitet-2_vedowd.jpg' 
                    wrapperClassName='align-top' 
                    className='w-full object-cover' 
                    alt='pic' 
                    src='https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680096084/DSC_8781-Bearbeitet-2_vedowd.jpg'
                    width={2560}
                    height={1440}
                    style={{ width: 'fit', height: 'fit' }}
                />
            </div>
        </>
    )
}

export default Header