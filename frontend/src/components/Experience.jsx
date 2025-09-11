import React from "react";
import { EXPERIENCES } from "../constants/index.jsx";

const Experience = () => {
  return (

    <div className="pb-10">
       <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-20%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
    </div>{" "}
      <div className="flex justify-start items-center my-10">
        <h1 className="md:text-2xl text-xl  text-slate-100 text-start px-2">Experience</h1>
        <div className="flex-1 h-[1px] bg-purple-700 mx-4"></div>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-2 gap-4">


        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-gradient-to-br from-[#0f001a] via-[#140021] to-[#1a0033] to-75% text-white rounded-2xl border-t-4 border-purple-600/40  p-4  shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-transform duration-300"
          >

            {/* Year */}
            <p className="text-purple-400 text-xs  mb-2">{exp.year}</p>

            {/* Role & Company */}
            <h3 className="text-xs font-semibold">{exp.role}</h3>
            <p className="text-gray-400 text-xs mb-2">{exp.company}</p>

            {/* Description */}
            <p className="text-gray-400 text-xs text-start mb-4">{exp.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
