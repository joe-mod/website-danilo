"use client"

import React, { useState } from 'react'
import Lightbox from './Lightbox';
import Image from 'next/image';


export const imageList = [
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097256/DSC_8798_n7pric.jpg",
        alt: "bild0",
        id: 1,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097824/DSC_8853-Bearbeitet_d5j8xq.jpg",
        alt: "bild1",
        id: 2,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097824/DSC_8895_mma7ia.jpg",
        alt: "bild2",
        id: 3,
    },
    {
        src: "/Images/bildvonwhatsapp.jpg",
        alt: "bild3",
        id: 4,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097930/DSC_8862_bnjn9v.jpg",
        alt: "bild4",
        id: 5,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097929/DSC_9041_a4mpsm.jpg",
        alt: "bild5",
        id: 6,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097927/DSC_9112_jo4nez.jpg",
        alt: "bild6",
        id: 7,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097927/DSC_8848_xzogzh.jpg",
        alt: "bild7",
        id: 8,
    },
    {
        src: "https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1680097927/DSC_9116_vzqggm.jpg",
        alt: "bild8",
        id: 9,
    },
];

function Gallery() {


    const [clickedImageID, setClickedImageID] = useState();

    const handleClick = (image) => {
        setClickedImageID(image.id)
        console.log(image.src + " got clicked and its ID is: " + image.id);
    }

return (
    <section id='Galerie' className='w-full bg-[#282727]'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 md:pt-10 md:pb-10'>
            {imageList.map((image, idx) => (
                <div key={idx} className='relative hover:scale-[1.02] transition-transform ease-in-out duration-200'>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        wrapperClassName='h-full w-full'
                        className='h-full w-full object-cover object-center py-5 md:py-0'
                        style={{ maxHeight: '600px' }}
                        width={400}
                        height={400}
                        loading='lazy'
                    />
                    <div onClick = {() => {handleClick(image)}} className='absolute inset-0 flex items-center justify-center opacity-0 hover:bg-opacity-75 transition-opacity duration-300 cursor-pointer'>
                    </div>
                </div>
            ))}
        </div>
        { clickedImageID && <Lightbox clickedImageID={clickedImageID} setClickedImageID={setClickedImageID} /> }
    </section>
)
}

export default Gallery;