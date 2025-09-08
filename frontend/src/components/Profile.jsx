import React from "react";
import profilepic from "../assets/ProfilePic.jpg";
import { motion } from "framer-motion";
const Profile = () => {
  return (
  <div>
    <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    </div>{" "}
  
    <motion.div
      className="border-b border-neutral-700 pb-4 lg:mb-35"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-wrap ">
        <div className="w-full  ">
          <div className="flex flex-col items-center ">
            <motion.h1
              className="  text-5xl font-thin tracking-tight sm:text-center lg:mt-16 lg:text-6xl bg-gradient-to-b from-pink-50 via-pink-300 to-pink-950 bg-clip-text text-transparent  "
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Priyanka Manjare
            </motion.h1>
            <motion.span
              className="pt-3 lg:pt-14 bg-gradient-to-r from-red-400 via-slate-50 to-amber-400 bg-clip-text tracking-tight text-transparent text-2xl"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Frontend Developer
            </motion.span>
            <p className="text-slate-500 pt-4 lg:pt-10 text-center ">
              I am a passionate third-year BE-IT student with a keen interest in
              software development. My skills span across frontend development,
              where I craft engaging user interfaces, and UI/UX design, ensuring
              seamless user experiences. I have hands-on experience with
              technologies like Node.js and Express for backend development and
              MongoDB for database management. Proficient in C++, I bring a
              strong problem-solving mindset to every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  );
};

export default Profile;
