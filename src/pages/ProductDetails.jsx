import React, { useState } from "react";
import { Star, Heart, ShoppingBag, ShieldCheck, RotateCcw, Truck } from "lucide-react";

// Structured dataset mapping product color variants and their respective sub-galleries
const PRODUCT_DATA = {
  id: "polo-01",
  name: "Premium Cotton Polo T-shirt",
  rating: 4.7,
  reviewsCount: 12,
  originalPrice: 1999,
  discountPercent: 68,
  couponCode: "DRIPNG5",
  sizes: ["S", "M", "L", "XL", "XXL"],
  variants: [
    {
      colorName: "Baby Pink",
      hex: "#e1b3d8",
      images: [
        "/products/baby-pink.jpg", // Main display image
        "/products/baby-pink.jpg", // Thumbnail angles...
        "/products/baby-pink.jpg"
      ]
    },
    {
      colorName: "Beige",
      hex: "#bda387",
      images: [
        "/products/beige.jpg",
        "/products/beige.jpg",
        "/products/beige.jpg"
      ]
    },
    {
      colorName: "Black",
      hex: "#222222",
      images: [
        "/products/black.jpg",
        "/products/black.jpg",
        "/products/black.jpg"
      ]
    },
    {
      colorName: "Lavender",
      hex: "#a79cc7",
      images: [
        "/products/lavender.jpg",
        "/products/lavender.jpg",
        "/products/lavender.jpg"
      ]
    },
    {
      colorName: "Navy Blue",
      hex: "#1b2a47",
      images: [
        "/products/navy-blue.jpg",
        "/products/navy-blue.jpg",
        "/products/navy-blue.jpg"
      ]
    },
    {
      colorName: "White",
      hex: "#f4f1eb",
      images: [
        "/products/white.jpg",
        "/products/white.jpg",
        "/products/white.jpg"
      ]
    },
    {
      colorName: "Wine Red",
      hex: "#581825",
      images: [
        "/products/wine-red.jpg",
        "/products/wine-red.jpg",
        "/products/wine-red.jpg"
      ]
    }
  ]
};

export default function ProductDetails() {
  // 1. Color Variant State Management
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(2); // Defaults to Black
  // 2. Main Gallery Active Image Index State Management
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // 3. Size State Selection Matrix Management
  const [selectedSize, setSelectedSize] = useState("M");

  const currentVariant = PRODUCT_DATA.variants[selectedVariantIndex];
  
  // Dynamic Calculation Pricing Engines
  const currentPrice = Math.round(
    PRODUCT_DATA.originalPrice * (1 - PRODUCT_DATA.discountPercent / 100)
  );

  const handleVariantChange = (index) => {
    setSelectedVariantIndex(index);
    setActiveImageIndex(0); // Resets gallery viewpoint focus back to main frame
  };

  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-20 font-sans text-[var(--text-primary)] bg-[var(--bg-primary)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* ================= LEFT SIDE: INTERACTIVE IMAGE GALLERY GALLERY ================= */}
        <section className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          
          {/* Vertical Gallery Thumbnail Strip Array */}
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 shrink-0">
            {currentVariant.images.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-16 h-20 rounded-xl overflow-hidden bg-[var(--surface-input)] border-2 shrink-0 transition ${
                  activeImageIndex === index ? "border-[var(--btn-primary)]" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={imgUrl} alt="Thumbnail view" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Large Primary Showcase Canvas Window */}
          <div className="flex-grow aspect-[3/4] rounded-3xl overflow-hidden bg-[var(--surface-input)] relative group border border-[var(--border-primary)] shadow-[var(--shadow-soft)]">
            <span className="absolute top-4 left-4 bg-[var(--surface-card)] text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10 shadow-sm">
              Bestseller
            </span>
            <button className="absolute top-4 right-4 w-9 h-9 bg-[var(--surface-card)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--btn-primary)] shadow-sm transition z-10">
              <Heart className="w-4 h-4" />
            </button>
            <img
              src={currentVariant.images[activeImageIndex]}
              alt={PRODUCT_DATA.name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "high-quality" }}
            />
          </div>
        </section>

        {/* ================= RIGHT SIDE: DISCOVERY METADATA DETAILS PANEL ================= */}
        <section className="lg:col-span-5 space-y-6">
          
          {/* Title Header Blocks & Ratings Context */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold bg-[var(--surface-input)] px-2.5 py-1 rounded-full w-max">
              <span className="flex items-center text-[var(--accent)] gap-0.5 font-bold">
                {PRODUCT_DATA.rating} <Star className="w-3.5 h-3.5 fill-[var(--accent)]" />
              </span>
              <span className="text-[var(--text-secondary)]">|</span>
              <span className="text-[var(--text-secondary)]">{PRODUCT_DATA.reviewsCount} Reviews</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight leading-tight">
              {PRODUCT_DATA.name}
            </h1>
          </div>

          {/* Pricing Stack Display Component */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-[var(--text-primary)]">₹{currentPrice}</span>
              <span className="text-base text-[var(--text-secondary)] line-through">₹{PRODUCT_DATA.originalPrice}</span>
              <span className="text-sm font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                {PRODUCT_DATA.discountPercent}% OFF
              </span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">Inclusive of all taxes</p>
          </div>

          {/* Promotional Value Coupons Banner Container */}
          <div className="border border-[var(--accent)] border-dashed bg-[var(--accent)]/10 p-4 rounded-3xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-[var(--text-primary)] flex items-center justify-center font-bold text-sm shrink-0">
              %
            </div>
            <div className="text-xs space-y-1">
              <p className="font-bold text-[var(--text-primary)]">Get Flat 5% Additional Discount</p>
              <p className="text-[var(--text-secondary)]">On cart values worth ₹1999 or above.</p>
              <p className="pt-1 font-mono text-[var(--text-secondary)]">Use Code: <span className="font-bold text-[var(--text-primary)]">{PRODUCT_DATA.couponCode}</span></p>
            </div>
          </div>

          {/* Color Switch Matrix Container Selector */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)] block">
              Color: <span className="text-[var(--text-primary)] lowercase font-medium">({currentVariant.colorName})</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {PRODUCT_DATA.variants.map((v, idx) => (
                <button
                  key={v.colorName}
                  onClick={() => handleVariantChange(idx)}
                  title={v.colorName}
                  className={`w-12 h-14 rounded-xl overflow-hidden border-2 bg-[var(--surface-input)] transition shrink-0 transform active:scale-95 ${
                    selectedVariantIndex === idx ? "border-[var(--btn-primary)] ring-2 ring-[var(--btn-primary)]/10 scale-105" : "border-[var(--border-primary)] opacity-80 hover:opacity-100"
                  }`}
                >
                  <img src={v.images[0]} alt={v.colorName} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Size Choice Grid Selector Matrix */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)]">
                Select Size
              </label>
              <button className="text-xs font-bold text-[var(--text-primary)] underline hover:text-[var(--text-secondary)]">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {PRODUCT_DATA.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`min-w-[54px] h-11 border text-xs font-bold rounded-2xl transition ${
                    selectedSize === sz
                      ? "bg-[var(--btn-primary)] text-white border-[var(--btn-primary)] shadow-[var(--shadow-soft)]"
                      : "border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--btn-primary)]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Button Triggers Row */}
          <div className="flex items-center gap-3 pt-4">
            <button className="flex-grow h-14 luxury-button-primary flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Add To Bag
            </button>
          </div>

          {/* Core Trust Metrics Panel Row */}
          <div className="border-t border-[var(--border-primary)] pt-6 grid grid-cols-3 gap-4 text-center text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
            <div className="flex flex-col items-center gap-1.5">
              <Truck className="w-5 h-5 text-[var(--text-secondary)]" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <RotateCcw className="w-5 h-5 text-[var(--text-secondary)]" />
              <span>7 Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-[var(--text-secondary)]" />
              <span>100% Genuine</span>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}