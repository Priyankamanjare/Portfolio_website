import React from "react";
import { PROJECTS } from "../constants/index.jsx";
import { GoLink } from "react-icons/go";

const Projects = () => {
  return (
    <div id="projects" className="pb-20">
      {/* Centered section heading */}
      <div className="flex justify-center items-center my-10">
        <h2 className="text-slate-300 text-3xl md:text-4xl font-bold text-center">Projects</h2>
      </div>
      <div className="flex justify-center">
        <p className="text-slate-300 text-center max-w-2xl mb-8 text-base md:text-lg">
          Some of the projects that highlight my learning, growth, and love for building.
        </p>
      </div>

      {/* Projects grid: image cards with hover overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((item, index) => (
          <div key={index} className="group rounded-2xl bg-gradient-to-br from-[#0f001a]/70 via-[#140021]/70 to-[#1a0033]/70 border border-purple-700/30 p-3 md:p-4 backdrop-blur-md shadow-lg">
            {/* Image block with overlay inside */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Background glow */}
              <div className="absolute inset-0 -z-10 rounded-xl blur-2xl bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-pink-500/10"></div>

              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                style={{ contentVisibility: 'auto' }}
              />

              {/* Overlay - slides from above over the image only */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#1a0033]/90 to-[#0a0014]/95 backdrop-blur-sm opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="h-full w-full p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-xs line-clamp-4">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-purple-300 text-[10px]">{tech}</span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-purple-300 text-[10px]">+{item.technologies.length - 3}</span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {item.repository && (
                        <a href={item.repository} target="_blank" rel="noopener noreferrer" className="text-purple-200 text-xs hover:text-purple-300 flex items-center gap-1">
                          Code <GoLink className="text-purple-300 text-xs"/>
                        </a>
                      )}

                      {item.liveDemo && (
                        <a href={item.liveDemo} target="_blank" rel="noopener noreferrer" className="text-purple-200 text-xs hover:text-purple-300 flex items-center gap-1">
                          Live <GoLink className="text-purple-300 text-xs"/>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name below image */}
            {/* Mobile-only: Tap to know more */}
            <div className="block md:hidden mt-2 text-center">
              <span className="text-xs text-purple-300 bg-black/30 px-2 py-1 rounded-full">Tap to know more</span>
            </div>
            <h3 className="mt-3 text-center text-slate-100 text-sm font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
