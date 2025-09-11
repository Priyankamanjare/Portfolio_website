import React from "react";
import aboutPic from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants/index.jsx";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4  ">
      <h1 className="text-4xl text-center my-20 font-light">
        About Me
      </h1>
      <div className="flex flex-wrap ">
        
      <div className=" w-full   ">
        <div className="flex justify-center  ">
          <p className="my-2 py-6 text-slate-500 text-center">{ABOUT_TEXT}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
