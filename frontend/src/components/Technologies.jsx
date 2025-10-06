
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
      {/* <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-70%] md:left-[-30%] right-0 top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none "></div>
        <div className="absolute bottom-0 right-[-70%] md:right-[-30%] top-[10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
      </div>{" "} */}
      {/* Centered section heading */}
      <div className="flex justify-center items-center my-10">
        <h2 className="text-slate-300 text-3xl md:text-4xl font-bold text-center">Skills</h2>
      </div>
        <div className="flex justify-center">
          <p className="text-slate-400 text-center max-w-2xl mb-8 text-base md:text-lg">
            I love experimenting with modern frontend stacks — from clean React UIs to playful animations. Here’s what I’ve been working with lately:
          </p>
        </div>
      <div className="">
        {/* 3D-style black container with title inside */}
        <div className="relative rounded-2xl bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur p-6  overflow-hidden">
          {/* subtle glow accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]"></div>


          {/* Infinite horizontal scroll for skill badges */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 md:gap-8 animate-marquee whitespace-nowrap my-2">
              {SKILLS.concat(SKILLS).map((skill, idx) => (
                <div key={skill.name + idx} className="group inline-block">
                  <div className="relative flex items-center justify-center">
                    <div className="rounded-full p-[2px] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 transition-transform duration-300 group-hover:scale-105">
                      <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#0b0b0b] shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(80,80,80,0.06)]">
                        <span className="text-slate-200 text-xs md:text-sm font-medium text-center px-2 leading-snug">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                    {/* soft ring on hover */}
                    <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-tr from-purple-600/40 via-fuchsia-500/30 to-indigo-600/40"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
