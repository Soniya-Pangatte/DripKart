import React from "react";
import { motion } from "framer-motion";

export const AuthArtPanel = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-2/5 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] p-8 flex flex-col justify-between relative text-white overflow-hidden min-h-[250px] md:min-h-[650px]"
    >
      <div className="z-10">
        <div className="w-8 h-8 flex flex-col justify-between items-start gap-1">
          <span className="h-1.5 w-full bg-white rounded-full"></span>
          <span className="h-1.5 w-3/4 bg-white rounded-full"></span>
          <span className="h-1.5 w-full bg-white rounded-full"></span>
        </div>
      </div>

      <div className="my-auto z-10 max-w-xs mt-12 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-wide">
          Blenda allows you to think in 3D
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/3 opacity-40 pointer-events-none flex items-end justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-300 stroke-current fill-none stroke-1">
          <path d="M100,200 Q80,100 40,80 Q20,70 40,50 Q70,30 90,80" />
          <path d="M100,200 Q120,110 160,90 Q180,80 160,60 Q130,40 110,90" />
          <path d="M100,200 Q100,90 80,40 Q70,20 90,10 Q110,0 110,60" />
        </svg>
      </div>
    </motion.div>
  );
};
