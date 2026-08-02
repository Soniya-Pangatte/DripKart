import HeroSection from "@/components/hero";
import FeaturedProducts from "@/sections/featured-products";
import TestimonialsSection from "@/sections/testimonials-section";

export default function HomePage() {
  return (
    <main className="flex-grow bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
      {/* 1. Split-screen Hero (Handles its own full width) */}
      <HeroSection />

      {/* 2. Fall Collection / Featured Products */}
      <FeaturedProducts />

      {/* 3. Inspired Banner - Full Width Video Section */}
      <section className="relative mt-20 h-[500px] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">

  <video
  className="absolute inset-0 w-full h-full object-cover"
  src="/bg-video.mp4"
  autoPlay
  muted
  loop
  playsInline
/>
  <div className="absolute inset-0 bg-black/10" />

  <div className="relative z-10 w-full max-w-7xl mx-auto">
    <h2 className="text-white text-5xl md:text-6xl font-light tracking-wide text-center">
      Inspired by your life
    </h2>
  </div>

</section>
      <TestimonialsSection />
    </main>
  );
}