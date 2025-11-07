import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-slate-300 py-6">
      <div className="max-w-5xl mx-auto  flex-col md:flex-row items-center justify-center gap-6">
        {/* Left: Name & copyright */}
        <div className="text-center ">
          <span className="font-semibold text-slate-200 text-xs md:text-md">Priyanka Manjare</span>
          <span className="mx-1 md:mx-2 text-sm md:text-md">|</span>
          <span className="text-xs md:text-sm">©{new Date().getFullYear()} All rights reserved</span>
        </div>
        {/* Center: Social links */}
        <div className="flex gap-6 items-center justify-center text-xs md:text-md my-2 md:my-4">
          <a href="https://github.com/Priyankamanjare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/priyankamanjare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition-colors">
            <FaLinkedin size={22} />
          </a>
          
        </div>
        {/* Right: Back to top */}
        <div className="text-center " text-sm md:text-md>
          <a href="#home" className="text-slate-400 hover:text-slate-100 text-xs underline transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
