
import React, { useState } from "react";
import { EXPERIENCES } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length);
  };

  const exp = EXPERIENCES[currentIndex];
  return (
    <motion.div id="experience"
      className="pb-10"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
       {/* <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
    </div>{" "} */}

      {/* Centered section heading */}
      <div className="flex justify-center items-center my-10 ">
        <h2 className="text-slate-300 text-3xl md:text-4xl font-bold text-center">Experience</h2>
      </div>
      <div className="flex justify-center">
        <p className="text-slate-300 text-center max-w-2xl mb-8 text-base md:text-lg">
          A glimpse into my journey — where I’ve learned, built, and grown through real-world projects and hands-on development experiences.
        </p>
      </div>

      {/* 3D-style container with title inside */}
      <div className="px-4">
        <div className="relative rounded-2xl bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur p-2 md:p-10 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)]"></div>
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]"></div>


          {/* Timeline - all experiences vertically with alternating sides */}
          <div className="relative z-10">
            {/* center vertical line (left on small screens, center on md+) */}
            <div className="pointer-events-none absolute inset-y-0 left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-px bg-gradient-to-b from-purple-700/50 via-fuchsia-500/40 to-indigo-600/40"></div>

            <div className="space-y-12 md:space-y-14">
              {EXPERIENCES.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative flex justify-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    {/* connector dot (left on small, center on md+) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]"></div>

                    {/* horizontal connector line (hidden on small) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-purple-600/60 to-fuchsia-500/40 ${isLeft ? "left-1/2 right-[10%]" : "left-[10%] right-1/2"}`}></div>

                    {/* card: full width on small with left padding for line; alternate on md+ */}
                    <div className={`w-full md:w-1/2 pl-12 ${isLeft ? "md:pr-10 md:pl-0" : "md:pl-10 md:pr-0"}`}>
                      <div className="rounded-2xl p-[2px] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600">
                        <div className="bg-gradient-to-br from-[#0f001a] via-[#140021] to-[#1a0033] to-75% text-white rounded-2xl p-5 md:p-6 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(80,80,80,0.06)]">
                          <p className="text-purple-400 text-[10px] md:text-xs mb-2">{item.year}</p>
                          <h3 className="text-xs md:text-sm font-semibold">{item.role}</h3>
                          <p className="text-gray-400 text-[10px] md:text-xs mb-3">{item.company}</p>
                          <p className="text-gray-300 text-[11px] md:text-xs text-start mb-4 leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                              <span key={i} className="bg-purple-600/20 text-purple-300 text-[10px] md:text-xs px-2 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  </motion.div>
  );
};

export default Experience;
