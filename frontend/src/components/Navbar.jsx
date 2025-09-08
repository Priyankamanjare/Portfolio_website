import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  return (
    <nav className=' rounded-md bg-clip-padding  flex items-center justify-between  '>
      <div className='flex flex-shrink-0 items-center '>
           <h1 className='font-semibold text-2xl'>Pm</h1>      </div>
      <div className='m-8 flex items-center justify-center space-x-3 '>
        <LuInstagram className='brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        <FaGithub className='brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        <FaLinkedin className='brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        <SiLeetcode className='brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
      </div>
    </nav>
  )
}

export default Navbar