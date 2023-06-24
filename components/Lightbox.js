"use client"

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { imageList } from './Gallery';


function Lightbox({ clickedImageID, setClickedImageID }) {

  const lightboxRef = useRef(null);

  const [currentPicture, setCurrentPicture] = useState(null);
  const [imageIsLoading,setImageIsLoading] = useState(false);

  useEffect(() => {

    setCurrentPicture(imageList.find(item => item.id === clickedImageID));
    setImageIsLoading(false);

  }, [clickedImageID])


  function pictureCarousell(direction) {

    if (direction === 'left') {
      if (clickedImageID === 1) { clickedImageID = imageList.length; }
      else {
        clickedImageID -= 1;
      }
    }
    else {
      if (clickedImageID === (imageList.length)) { clickedImageID = 1; }
      else {
        clickedImageID += 1;
      }
    }
    setClickedImageID(clickedImageID);
  }

  return (
    <>
      <div ref={lightboxRef} className='fixed top-0 left-0 flex flex-row w-screen h-screen bg-[#282727] bg-opacity-90 z-10'>
        <div className='flex justify-center items-center w-1/6 h-screen '>
          <Image className='z-10 text-white hover:scale-110' src={'./svgs/ArrowLeft.svg'} width={75} height={75} alt='Arrow-Left' onClick={() => { pictureCarousell('left') }} />
        </div>
        <div className='w-4/6 h-screen relative'>
          <div className='flex justify-center items-center h-full w-fit'>
            {currentPicture && (
              <Image
                src={currentPicture.src}
                alt={currentPicture.alt}
                placeholderSrc={currentPicture.src}
                className={`${imageIsLoading ? '' : 'opacity-0 transition-opacity duration-750'} py-20 h-full w-full object-scale-down`}
                onLoad={() => setImageIsLoading(true)}
                fill
              />
            )}
          </div>
        </div>
        <div className='flex justify-center items-center w-1/6 h-screen'>
          <Image className='z-10 text-white hover:scale-110' src={'./svgs/ArrowRight.svg'} width={75} height={75} alt='Arrow-Right' onClick={() => pictureCarousell('right')} />
          <div className='absolute top-[15%]'><Image className='top-20 text-white hover:scale-110' src={'./svgs/close.svg'} width={100} height={100} alt='Close' onClick={() => setClickedImageID(null)} /></div>
        </div>
      </div>
    </>
  );
}

export default Lightbox;
