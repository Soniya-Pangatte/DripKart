import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import CategoriesSection from "@/sections/categories-section";
import FeaturedProducts from "@/sections/featured-products";
import NewsletterSection from "@/sections/newsletter-section";
import PromoBanner from "@/sections/promo-banner";
import TestimonialsSection from "@/sections/testimonials-section";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection />
      <div className="mx-auto max-w-330 px-6 md:px-8">
        <FeaturedProducts />
        <CategoriesSection />
        <PromoBanner />
        <TestimonialsSection />
        <NewsletterSection />
      </div>
    </main>
  );
}
