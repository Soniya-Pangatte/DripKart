import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import FeaturedProducts from "@/sections/featured-products";
import PromoBanner from "@/sections/promo-banner";
import TestimonialsSection from "@/sections/testimonials-section";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-330 px-6 md:px-8">
        <FeaturedProducts />
        <PromoBanner />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
}