import React, { useState } from 'react'
import logo from '../assets/kevinRushLogo.png'
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgLayoutList } from "react-icons/cg";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className=' bg-clip-padding  flex  border-b  border-purple-600 '>
      <div className='flex flex-shrink-0 items-center justify-start flex-1'>
           <h1 className='font-semibold text-4xl text-slate-100 '>Pm</h1>
      </div>
      <div className=' m-4 hidden md:flex items-center justify-center space-x-3 flex-1'>
        <button onClick={() => handleScroll('home')} className='bg-transparent text-sm text-slate-100 px-4 py-2 rounded-md  transition-transform duration-300 ease-out hover:scale-110'>Home</button>
        <button onClick={() => handleScroll('skills')} className='bg-transparent text-sm text-slate-100 px-4 py-2 rounded-md  transition-transform duration-300 ease-out hover:scale-110'>Skills</button>
        <button onClick={() => handleScroll('projects')} className='bg-transparent text-sm text-slate-100 px-4 py-2 rounded-md  transition-transform duration-300 ease-out hover:scale-110'>Projects</button>
        <button onClick={() => handleScroll('contact')} className='bg-transparent text-sm text-slate-100 px-4 py-2 rounded-md  transition-transform duration-300 ease-out hover:scale-110'>Contact</button>
      </div>
      <div className='flex-1  m-6 flex items-center justify-end space-x-3 relative'>
       
        <a href='https://github.com/Priyankamanjare' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <FaGithub className='md:text-lg brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        </a>
        <a href='https://www.linkedin.com/in/priyanka-manjare-109195258/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
          <FaLinkedin className='md:text-lg brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        </a>
        <a href='https://leetcode.com/u/priyankamanjare05/' target='_blank' rel='noopener noreferrer' aria-label='LeetCode'>
          <SiLeetcode className='md:text-lg brightness-100 text-white transition-transform duration-300 hover:scale-125'/>
        </a>

        <button
          type='button'
          aria-label='Open menu'
          className='md:hidden text-white p-2 rounded-md transition-transform duration-300 hover:scale-110'
          onClick={() => setMenuOpen((v) => !v)}
        >
          <CgLayoutList className='text-2xl'/>
        </button>

        {menuOpen && (
          <div className='md:hidden absolute top-full right-0 mt-2 w-40 rounded-lg border border-purple-700 bg-[#0f001a] shadow-lg p-2 z-50'>
            <button onClick={() => handleScroll('home')} className='w-full text-left text-slate-100 text-sm px-3 py-2 rounded-md hover:bg-purple-900/30'>Home</button>
            <button onClick={() => handleScroll('skills')} className='w-full text-left text-slate-100 text-sm px-3 py-2 rounded-md hover:bg-purple-900/30'>Skills</button>
            <button onClick={() => handleScroll('projects')} className='w-full text-left text-slate-100 text-sm px-3 py-2 rounded-md hover:bg-purple-900/30'>Projects</button>
            <button onClick={() => handleScroll('contact')} className='w-full text-left text-slate-100 text-sm px-3 py-2 rounded-md hover:bg-purple-900/30'>Contact</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar