import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
  
    <div className="border-b border-neutral-800">
      <h1 className="text-4xl text-center my-20 font-light">Projects</h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap lg:justify-center mb-8">
          <div className="w-full lg:w-1/4 object-cover flex justify-center ">
            <img
              className="mb-10 rounded transition-transform duration-300 hover:scale-125"
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4 ">
            <h6 className="mb-2 font-semibold">{project.name}</h6>
            <p className="mb-4 text-slate-500">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-900  py-1 text-sm text-purple-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
