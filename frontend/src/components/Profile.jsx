import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot.png";
const Profile = () => {
  const fullName = "Priyanka Manjare";
  // Vanta background (darker variant than Contact)
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const supportsWebGL = () => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (vantaEffect) return;
    if (!supportsWebGL()) return; // graceful fallback if WebGL unavailable/blocked
    if (!window.VANTA || !window.VANTA.NET || !vantaRef.current) return;

    try {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2a003f, // darker purple for lines
        backgroundColor: 0x000000, // darker background
      });
      setVantaEffect(effect);
    } catch (e) {
      // fail silently and keep static background
      // console.error("Vanta init failed", e);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
  <div id="home" ref={vantaRef} className="relative mb-20">

    <div className="relative z-10 mx-auto max-w-7xl px-2 md:px-4 lg:px-12">
      <div className="flex flex-col items-center gap-4 py-8 md:py-12 md:flex-row-reverse lg:gap-16 lg:py-16">
        <motion.div
          className="w-full lg:mt-16 lg:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src={robot} alt="Robot" 
          className="w-40 md:w-72 drop-shadow-[0_10px_30px_rgba(236,72,153,0.25)]
          transition-transform duration-300 ease-out hover:scale-110" />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 overflow-visible"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:items-start px-2 lg:px-0 overflow-visible">
            <span className="text-md lg:text-base lg:ml-1 text-slate-300 tracking-wide mb-1 lg:mb-2 text-center lg:text-left ">
              Hi, I am
            </span>
            <motion.h1
              className="font-bold tracking-tighter text-2xl md:text-4xl lg:text-6xl bg-gradient-to-br from-purple-500/60 via-fuchsia-500/60 to-pink-500/60 bg-clip-text text-transparent text-center lg:text-left py-2 lg:py-4 lg:pr-12  text-wrap break-words"
              style={{ WebkitTextFillColor: 'transparent', color: '#1a0033' }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {fullName}
            </motion.h1>
            <motion.span
              className="pt-2 lg:pt-6 lg:ml-1 tracking-tight text-slate-50 text-xl lg:text-2xl text-center lg:text-left"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Frontend Developer
            </motion.span>
            <p className="text-slate-300 pt-4 lg:pt-10 lg:ml-1 text-sm text-justify justify-center items-center lg:text-left ">
              I am a passionate BE-IT student with a keen interest in
              software development. My skills span across frontend development,
              where I craft engaging user interfaces, and UI/UX design, ensuring
              seamless user experiences. I have hands-on experience with
              technologies like Node.js and Express for backend development and
              MongoDB for database management. Proficient in C++, I bring a
              strong problem-solving mindset to every project I undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default Profile;
