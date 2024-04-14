import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false) 


  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className=' w-full h-20 shadow-xl bg-white'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
            <p className='font-bold text-2xl'>AYBIKE USTUN</p>
          </Link>
            <div className='hidden sm:flex'>
              <ul className="hidden gap-8 sm:flex">
                <Link href='/about'>
                  <li className="uppercase hover:border-b text-xl">About</li>
                </Link>
                <Link href='/projects'>
                  <li className="uppercase hover:border-b text-xl">Projects</li>
                </Link>
                        <li className="uppercase hover:border-b text-xl">
                            <a href="https://drive.google.com/file/d/17uUZQo6wWn_Qwm4GkUl7kM6KUFydxCKY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
              </ul>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
              <AiOutlineMenu size={25}/>
            </div>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
        >
              <div className='flex w-fll items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                  <AiOutlineClose size={25}/>
                </div>
              </div>
              <div className='flex-col py-4'>
              <ul>
                <Link href='/about'>
                  <li
                  onClick={()=> setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                  >
                    About
                    </li>
                </Link>    

                    <Link href='/projects'>
                  <li
                  onClick={()=> setMenuOpen(false)}
                  className='py-4 cursor-pointer'
                  >
                    Projects
                    </li>
                    </Link>  

                    <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    <a
                      href="https://drive.google.com/file/d/17uUZQo6wWn_Qwm4GkUl7kM6KUFydxCKY/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:underline"
                    >
                      Resume
                    </a>
                  </li>

              </ul>
            </div>
            <Link href='/'>
            <p>Aybike Ustun</p>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar