import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot.png";
const Profile = () => {
  const fullName = "Priyanka Manjare";
  const letters = Array.from(fullName);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
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
  <div id="home" ref={vantaRef} className="relative overflow-hidden mb-20">

    <div className="relative z-10 mx-auto max-w-7xl px-2 lg:px-8">
      <div className="flex flex-col items-center gap-10 py-8 md:py-12 md:flex-row-reverse lg:gap-16 lg:py-16">
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
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:items-start ">
            <span className="text-md lg:text-base lg:ml-1 text-slate-400 tracking-wide mb-1 lg:mb-2 text-center lg:text-left ">
              Hi, I am
            </span>
            <motion.h1
              className="font-bold tracking-tighter text-3xl lg:text-6xl text-purple-900 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {letters.map((char, idx) => (
                <motion.span key={idx} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.span
              className="pt-2 lg:pt-6 lg:ml-1 tracking-tight bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80 bg-clip-text text-transparent text-xl lg:text-2xl text-center lg:text-left"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Frontend Developer
            </motion.span>
            <p className="text-slate-400 pt-4 lg:pt-10 lg:ml-1 text-sm text-center lg:text-left ">
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
