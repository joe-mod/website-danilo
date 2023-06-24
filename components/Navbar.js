"use client"

import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const hrefList = [
  { section: "Start", href: "#Start" },
  { section: "Über-Danilo", href: "#Über-Danilo" },
  { section: "Galerie", href: "#Galerie" },
  { section: "Deckung", href: "#Deckung" },
  { section: "Links", href: "#Links" },
  { section: "Kontakt", href: "#Kontakt" },
]

function Navbar() {

  const [isTransparent, setTransparency] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const isTablet = useMediaQuery({ maxWidth: 640 });
  const [isSticky, setSticky] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  }


  const handleMenu = () => {
    if(isTablet) {
      setMenuOpen(!isMenuOpen);
    } else {
      setMenuOpen(false);
    }
  }

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  return (
    <>
      <nav className={`fixed top-0 bg-black ${isMenuOpen && isTablet ? "h-[100%] bg-opacity-80 transition ease-out duration-500" : "tablet:h-[3.65rem] h-fit"} bg-opacity-50 w-full z-10`}>
        <div className={`hidden tablet:flex`}>
          <button
            className={`flex absolute ${isMenuOpen && isTablet ? "right-10 top-10" : "right-0"} px-3 py-3 text-white `}
            onClick={handleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            )}
          </button>
        </div>
        <div className={`${isMenuOpen && isTablet ? "pt-20" : "tablet:hidden"}`}>
          <ul className={`"object-fill justify-center space-x-8 flex flex-row uppercase font-bold text-lg h-20 tablet:h-fit tablet:flex-col tablet:items-center tablet:space-x-0 tablet:space-y-10`}>
            {hrefList.map((link, idx) => (
              <li key={idx} className={` text-white hover:scale-105 transition duration-200 flex items-center h-full`}>
                <a href={link.href} className='' onClick={closeMenu}>
                  {link.section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar