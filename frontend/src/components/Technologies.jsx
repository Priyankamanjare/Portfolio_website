
import React from "react";
import { SKILLS } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <motion.div
      id="skills"
      className="pb-5 md:pb-10"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-70%] md:left-[-30%] right-0 top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none "></div>
        <div className="absolute bottom-0 right-[-70%] md:right-[-30%] top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
      </div>{" "}
      <div className="flex justify-start items-center my-10 md:my-10">
        <h1 className="md:text-2xl text-xl  text-slate-100 text-start px-2">Skills</h1>
        <div className="flex-1 h-[1px] bg-purple-700 mx-4"></div>
      </div>
      <div className="overflow-x-auto scroll-smooth scrollbar-hide px-4">
        <div className="flex gap-6 md:gap-10 py-6 md:my-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className=" flex-shrink-0
                grid grid-row-2 gap-2 p-4 md:p-8 rounded-md
                bg-gradient-to-br from-[#1a0033] via-[#0d0115] to-[#0f001a] to-75% 
                border-t-4 border-purple-600/80  
                transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/40 
                cursor-pointer"
            >
              <div className="flex items-center justify-center">
                {skill.icon}
              </div>
              <div className="text-slate-400 text-xs flex items-center py-2">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
