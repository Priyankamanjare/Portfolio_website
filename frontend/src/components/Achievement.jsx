import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../constants/index.jsx";

const Achievement = () => {
  return (
    <section id="achievements" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-slate-300 text-3xl md:text-4xl font-bold text-center mb-6">Achievements</h2>
        <div className="flex justify-center">
          <p className="text-slate-400 text-center max-w-2xl mb-10 text-base md:text-lg">
            Some highlights from my journey — competitions, certifications, and creative projects that shaped my growth.
          </p>
        </div>
        <div className="relative rounded-2xl bg-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur p-2 md:p-10 overflow-hidden ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((item) => (
              <motion.div
                key={item.id}
                className="rounded-2xl p-6 flex flex-col gap-3 items-start bg-gradient-to-br from-purple-900/80 via-fuchsia-900/70 to-pink-900/80 border border-purple-700/30 shadow-lg cursor-pointer hover:bg-gradient-to-tr hover:from-pink-700/80 hover:via-fuchsia-700/70 hover:to-purple-700/80"
                whileHover={{ scale: 1.08, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-slate-100 text-lg font-semibold mb-1">{item.title}</h3>
                <span className="text-xs text-slate-400 mb-2">{item.year} • {item.type}</span>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
