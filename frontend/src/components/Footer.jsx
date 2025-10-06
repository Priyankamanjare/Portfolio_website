import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-slate-400 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Name & copyright */}
        <div className="text-center md:text-left">
          <span className="font-semibold text-slate-200">Priyanka Manjare</span>
          <span className="mx-2">|</span>
          <span className="text-xs">© {new Date().getFullYear()} All rights reserved</span>
        </div>
        {/* Center: Social links */}
        <div className="flex gap-6">
          <a href="https://github.com/Priyankamanjare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/priyankamanjare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-100 transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:priyankamanjare05@gmail.com" className="hover:text-slate-100 transition-colors">
            <FaEnvelope size={22} />
          </a>
        </div>
        {/* Right: Back to top */}
        <div className="text-center md:text-right">
          <a href="#home" className="text-slate-400 hover:text-slate-100 text-xs underline transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
