import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  // ---- Vanta Setup ----
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x453447, // wave color
          backgroundColor: 0x0, // black background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  // ---------------------

  return (
    <motion.div
      id="contact"
      ref={vantaRef} // <-- attach Vanta here
      className="border-b border-neutral-800 relative overflow-hidden"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Contact Content */}
      <div className="relative z-10 flex flex-col justify-center items-center py-14">
        <h1 className="text-2xl text-center my-5 text-slate-300">Get in Touch</h1>
        <div className="inline-block mx-auto  p-6 rounded-2xl bg-black/60 backdrop-blur border border-purple-800/40 shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Priyanka Vishnu Manjare</h1>
          
          <a href="mailto:priyankamanjare05@gmail.com" className="text-slate-100 text-sm underline">priyankamanjare05@gmail.com</a>
          <p className="mt-4 text-slate-300 text-sm font-medium">Location : Pune, Maharashtra, India</p>
          
          <div className="mt-4 grid grid-cols-2 gap-4 mx-auto max-w-fit justify-items-center">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-1 text-blue-500 underline">
              LinkedIn
              <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
            <a href="https://github.com/Priyankamanjare/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-1 text-blue-500 underline">
              GitHub
              <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/priyankamanjare05/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-1 text-blue-500 underline">
              LeetCode
              <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
            <a href="https://www.hackerrank.com/profile/priyankamanjare2" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-1 text-blue-500 underline">
              HackerRank
              <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
