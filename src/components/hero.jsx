import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Banner datasets mapping your core promotional drops
const BANNERS = [
  {
    id: 1,
    image: "hg2.jpg", // Desktop banner
    mobileImage: "hg2.jpg", // Mobile banner
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
    <section className="w-full relative h-[60vh] md:h-[85vh] overflow-hidden select-none">
      
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E2723]/30 via-transparent to-[#2E2723]/30" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Overlaid Marketing Copy Controls */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto pointer-events-none">
        <div className="max-w-xl text-white space-y-3 md:space-y-5 pointer-events-auto">
          <motion.p
            key={`sub-${currentBanner.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-medium tracking-widest text-[var(--surface-card)] bg-white/20 border border-white/30 inline-block px-4 py-2 rounded-full backdrop-blur-sm uppercase"
          >
            {currentBanner.subtitle}
          </motion.p>
          
          <motion.h1
            key={`title-${currentBanner.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif font-light tracking-tight leading-tight text-white drop-shadow-md"
          >
            {currentBanner.title} <br />
            <span className="font-serif font-medium text-[var(--surface-input)]">{currentBanner.deal}</span>
          </motion.h1>

          <div className="pt-4">
            <Link
              to="/shop"
              className="luxury-button-primary inline-block bg-white text-[var(--text-primary)] hover:bg-[var(--surface-input)]"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Manual Pagination Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm backdrop-blur-sm transition opacity-0 hover:opacity-100 md:opacity-100 border border-white/30"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-sm backdrop-blur-sm transition opacity-0 hover:opacity-100 md:opacity-100 border border-white/30"
      >
        ❯
      </button>

      {/* 4. Bottom Horizontal Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}