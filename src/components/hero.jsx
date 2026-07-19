import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Banner datasets mapping your core promotional drops
const BANNERS = [
  {
    id: 1,
    image: "hg2.jpg", // Desktop banner
    mobileImage: "hg2.jpgx", // Mobile banner
    title: "EVERYDAY FASHION DEALS",
    subtitle: "Premium Shirts & Combos",
    deal: "FLAT 60% OFF",
    link: "/shop"
  },
  {
    id: 1,
    image: "high.jpg", // Desktop banner
    mobileImage: "high.jpg", // Mobile banner
    title: "EVERYDAY FASHION DEALS",
    subtitle: "Premium Shirts & Combos",
    deal: "FLAT 60% OFF",
    link: "/shop"
  },
  {
    id: 2,
    image: "hg3.jpg",
    mobileImage: "hg3.jpg",
    title: "NEW ARRIVALS DROPPING",
    subtitle: "Oversized Tees & Cargo Pants",
    deal: "STARTING AT ₹399",
    link: "/shop/new-arrivals"
  },
  {
    id: 3,
    image: "hg4.jpg",
    mobileImage: "hg4.jpg",
    title: "THE ULTIMATE CARGO WARDROBE",
    subtitle: "Heavyweight Boxers & Shorts",
    deal: "BUY 2 GET 1 FREE",
    link: "/shop/bottomwear"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide loop running seamlessly every 4 seconds (4000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const currentBanner = BANNERS[currentIndex];

  return (
    <section className="w-full relative h-[60vh] md:h-[85vh] bg-zinc-100 overflow-hidden font-sans select-none">
      
      {/* 1. Dynamic Background Image Slider Window */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner.id}
          initial={{ opacity: 0.8, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.9 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={currentBanner.image} />
            <source media="(max-width: 767px)" srcSet={currentBanner.mobileImage} />
            <img
              src={currentBanner.image}
              alt={currentBanner.title}
              className="w-full h-full object-cover object-center rendering-crisp-edges"
              style={{ imageRendering: "high-quality" }}
            />
          </picture>
          {/* Ambient Contrast Tint Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Overlaid Marketing Copy Controls */}
      <div className="absolute inset-0 flex items-center px-6 md:px-20 z-10 max-w-7xl mx-auto pointer-events-none">
        <div className="max-w-xl text-white space-y-3 md:space-y-5 pointer-events-auto">
          <motion.p
            key={`sub-${currentBanner.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-bold tracking-widest text-indigo-300 bg-indigo-950/40 inline-block px-3 py-1 rounded-full backdrop-blur-sm"
          >
            {currentBanner.subtitle}
          </motion.p>
          
          <motion.h1
            key={`title-${currentBanner.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-md"
          >
            {currentBanner.title} <br />
            <span className="text-amber-400 font-extrabold">{currentBanner.deal}</span>
          </motion.h1>

          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-block bg-white text-indigo-950 font-bold px-8 py-3.5 rounded-xl hover:bg-amber-400 hover:text-indigo-950 transition duration-300 shadow-xl text-xs tracking-wider uppercase"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Manual Pagination Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center text-sm backdrop-blur-xs transition opacity-0 hover:opacity-100 md:opacity-100"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center text-sm backdrop-blur-xs transition opacity-0 hover:opacity-100 md:opacity-100"
      >
        ❯
      </button>

      {/* 4. Bottom Horizontal Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-amber-400" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}