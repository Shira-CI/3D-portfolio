import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)   

          }}>
          <img src={logo} alt="logo" className='w-12 h-12 object-contain rounded' />
          <p className='text-white-200 text-[18px] font-medium cursor-pointer flex ml-4'>
            Shira &nbsp; <span className='sm:block hidden'>| Fullstack Developer</span>
            </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? 'text-hovered' : 'text-secondary'}
              hover:text-hovered text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggleMobileMenu ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          />
          <div className={`${toggleMobileMenu ? 'flex' : 'hidden'}
             p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? 'text-hovered' : 'text-secondary'}
              font-popins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggleMobileMenu(!toggleMobileMenu)
                    setActive(link.title)}}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav >
  )
}

export default Navbar