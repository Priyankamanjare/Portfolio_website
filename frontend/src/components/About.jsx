
import React from "react";
import aboutPic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.jsx";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
      className="border-b border-neutral-700 pb-4"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
    </motion.div>
  );
};

export default About;
