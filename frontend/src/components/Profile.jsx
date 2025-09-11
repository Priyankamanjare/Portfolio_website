import React from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot.png";
const Profile = () => {
  return (
  <div id="home">
    <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    </div>{" "}

    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="flex flex-col items-center gap-10 py-8 md:py-12 md:flex-row lg:gap-16 lg:py-16">
        <motion.div
          className="w-full lg:mt-16 lg:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src={robot} alt="Robot" 
          className="w-40 md:w-72 drop-shadow-[0_10px_30px_rgba(236,72,153,0.25)]
          transition-transform duration-300 ease-out hover:scale-110" />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center ">
            <motion.h1
              className=" font-thin tracking-tight text-center text-4xl  lg:text-6xl bg-gradient-to-b from-pink-50 via-pink-300 to-pink-950 bg-clip-text text-transparent  "
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Priyanka Manjare
            </motion.h1>
            <motion.span
              className="pt-2 lg:pt-6 bg-gradient-to-r from-red-400 via-slate-50 to-amber-400 bg-clip-text tracking-tight text-transparent text-xl lg:text-2xl"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Frontend Developer
            </motion.span>
            <p className="text-slate-100 pt-4 lg:pt-10 text-sm text-center md:text-justify ">
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
