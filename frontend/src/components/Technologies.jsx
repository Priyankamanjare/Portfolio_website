import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const Technologies = () => {
  return (
  
    <div className="border-b border-neutral-800 pb-20">
      <h1 className="text-4xl text-center my-20 font-light">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-125">
        <FaReact className="text-3xl text-cyan-400 brightness-200"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-125">
        <FaNodeJs className="text-3xl text-lime-400 brightness-200"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-125">
        <TbBrandCpp className="text-3xl text-slate-50 brightness-200"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-125">
        <SiMongodb className="text-3xl text-green-600 brightness-200"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-125">
        <SiMysql className="text-3xl text-cyan-700  brightness-200"/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
