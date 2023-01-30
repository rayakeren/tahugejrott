import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import * as Scroll from 'react-scroll';

export const Navbar = () => {

  // i dont know how to mix them so i make 2 condition (sad)
  const [fontscroll,setfontscroll] = useState(false)
  const [black,setblack] = useState(false)

  const whitefont =()=> {
    if (window.scrollY > window.innerHeight - 90) {
      setfontscroll(true)
    } else {
      setfontscroll(false)
    }
  }

  const blackfont =()=> {
    if (window.scrollY > window.innerHeight + 800) {
      setblack(true)
    } else {
      setblack(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', whitefont)
    window.addEventListener('scroll', blackfont)
    return ()=> {
      window.removeEventListener('scroll', whitefont)
      window.removeEventListener('scroll', blackfont)
    }
  })

  return (
    
    <nav className='fixed z-[1] w-screen justify-around p-6 hidden md:flex'>
        <div>
            <img className='w-20' src={logo} alt="" />
        </div>
        <div className={`flex gap-8 font-semibold text-lg items-center ${fontscroll? "text-white":null} ${black? "text-black":null }`}>
            <a className='hover:underline hover:scale-105 hover:font-bold duration-150' href="#hero">Home</a>
            <a className='hover:underline hover:scale-105 hover:font-bold duration-150' href="#about">About</a>
            <a className='hover:underline hover:scale-105 hover:font-bold duration-150' href="#team">Team</a>
            <a className='hover:underline hover:scale-105 hover:font-bold duration-150' href="#contact">Contact</a>
        </div>
    </nav>
  )
}
