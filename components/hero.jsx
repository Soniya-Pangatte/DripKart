"use client";

import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row w-full">

      {/* Left Side */}
      <div className="w-full md:w-1/2 h-[750px]">
        <img
          src="/home.jpg"
          alt="Fashion"
          className="w-full h-full object-contain bg-[#4a1f21]"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-[750px] bg-[#4a1f21] text-white flex flex-col justify-center items-start px-12 md:px-24">
        <h2 className="text-5xl md:text-6xl font-light mb-6">
          Refresh your closet
        </h2>

        <p className="mb-10 text-lg md:text-xl font-light">
          Shop the latest looks today.
        </p>

        <Link
  to="/shop"
  className="bg-white !text-black px-10 py-4 text-sm tracking-widest uppercase hover:bg-gray-200 hover:!text-black transition-colors"
>
  Shop Now
</Link>
      </div>

    </section>
  );
}