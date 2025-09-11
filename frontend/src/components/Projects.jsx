import React from "react";
import { PROJECTS } from "../constants/index.jsx";
import { GoLink } from "react-icons/go";

const Projects = () => {
  return (
    <div id="projects" className="pb-20 border-b border-purple-700">
      {/* Section heading */}
      <div className="flex justify-start items-center my-10">
        <h1 className="md:text-2xl text-xl text-slate-100 text-start px-2">
          Projects
        </h1>
        <div className="flex-1 h-[1px] bg-purple-700 mx-4"></div>
      </div>

      {/* Projects loop */}
      {PROJECTS.map((item, index) => {
        const isEven = index % 2 === 0; // alternate layout

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-4 mb-10 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Project image with gradient blob */}
            <div className="relative w-full md:w-1/2 flex justify-center">
            <div
          className={`absolute top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full blur-3xl 
          bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-pink-500/20 
          ${isEven ? "-left-8" : "-right-8"} pointer-events-none`}  
        ></div>              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="relative z-10 rounded-xl border-t-8 border-t-purple-600/10 border-r-8 border-r-purple-600/10 shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ contentVisibility: 'auto' }}
              />
            </div>

            {/* Project text box with gradient background */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0f001a]/70 via-[#140021]/70 to-[#1a0033]/70 border border-purple-700/30 p-4 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-transform duration-300">
              <h3 className="text-sm font-medium text-slate-100 mb-2">
                {item.name}
              </h3>
              <p className="text-xs text-slate-400 text-justify mb-2">
                {item.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className=" text-purple-400 text-xs  pb-4 rounded "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
               
                <a
                  href={item.repository}
                  target="_blank"
                  className="text-purple-200 text-xs hover:text-purple-300 "
                >
                  <div className="flex gap-1 items-center">
                  Code
                 <GoLink className="text-purple-300 text-xs"/>
                  </div>
                </a>
                
                
                <a
                  href={item.liveDemo}
                  target="_blank"
                  className="text-purple-200 text-xs hover:text-purple-300 "
                >
                  <div className="flex gap-1 items-center">
                    Live
                 <GoLink className="text-purple-300 text-xs"/>
                  </div>
                </a>
               
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
