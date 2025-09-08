import React from "react";
import {EXPERIENCES} from "../constants";

const Experience = () => {
  return (
  
    <div className="border-b border-neutral-800">
      <h1 className="text-4xl text-center my-20 font-light">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 ">
              <p className="mb-2 text-slate-500 ">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl  lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-slate-500">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
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
    </div>
  );
};

export default Experience;
