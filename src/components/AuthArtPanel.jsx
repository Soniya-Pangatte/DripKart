import React from "react";
import { motion } from "framer-motion";

export const AuthArtPanel = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden md:flex w-full md:w-[45%] p-10 md:p-12 flex-col justify-between relative overflow-hidden min-h-[650px]"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/home.jpg")' }}
      />
      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-[#3B2D25]/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">
        <div className="space-y-4">
          <span className="inline-block text-lg font-serif tracking-[0.2em] uppercase mb-10">
            DripKart
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight">
            Luxury begins with timeless choices.
          </h1>
        </div>

        <div className="mt-8">
          <p className="text-sm font-light tracking-wide text-white/80">
            A quiet narrative of refined essentials.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
