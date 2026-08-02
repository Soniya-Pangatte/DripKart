"use client"

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useCartStore } from "@/lib/cartStore";
import { ArrowLeft, Heart, ShoppingBag, ShieldCheck, RotateCcw, Truck } from "lucide-react";

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(undefined);
  const [selectedSize, setSelectedSize] = useState("M");

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    supabase
      .from("products")
      .select("*")
      .eq("id", Number(id))
      .single()
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
        } else {
          setProduct(data);
          const matchedIdx = AVAILABLE_COLORS.findIndex(v => 
            data.name.toLowerCase().includes(v.name.toLowerCase())
          );
          setSelectedVariantIndex(matchedIdx >= 0 ? matchedIdx : 0);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const AVAILABLE_COLORS = [
    { name: "Baby Pink", hex: "#e1b3d8", tailwindOverlay: "bg-pink-400/20 mix-blend-hue" },
    { name: "Beige", hex: "#bda387", tailwindOverlay: "bg-amber-700/15 mix-blend-hue" },
    { name: "Black", hex: "#222222", tailwindOverlay: "bg-zinc-900/60 mix-blend-color-burn" },
    { name: "Lavender", hex: "#a79cc7", tailwindOverlay: "bg-purple-400/25 mix-blend-hue" },
    { name: "Navy Blue", hex: "#1b2a47", tailwindOverlay: "bg-blue-900/30 mix-blend-hue" },
    { name: "White", hex: "#f4f1eb", tailwindOverlay: "bg-white/10 mix-blend-hue" },
    { name: "Wine Red", hex: "#581825", tailwindOverlay: "bg-red-900/25 mix-blend-hue" }
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase">Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex h-screen items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <p className="text-lg font-light text-red-700">Product not found</p>
      </div>
    );
  }

  const finalVariants = AVAILABLE_COLORS;
  const matchedColorIndex = finalVariants.findIndex(v => 
    product.name.toLowerCase().includes(v.name.toLowerCase())
  );
  
  const initialIndex = matchedColorIndex >= 0 ? matchedColorIndex : 0;
  const currentVariant = finalVariants[selectedVariantIndex !== undefined ? selectedVariantIndex : initialIndex];
  
  const originalPrice = product.original_price || Math.round(product.price * 2.5);
  const discountPercent = product.discount_percent || 68;

  const handleVariantChange = (index) => {
    setSelectedVariantIndex(index);
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${currentVariant.name}-${selectedSize}`,
      name: `${product.name} (${currentVariant.name})`,
      price: product.price,
      image: product.image,
      color: currentVariant.name,
      size: selectedSize,
      qty: 1
    });
    alert(`Added ${product.name} (${currentVariant.name}) to cart!`);
  };

  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-section)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition duration-200 hover:bg-[var(--surface-input)] hover:text-[var(--btn-primary)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Large Product Image Display Container */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[550px] aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-section)] relative border border-[var(--border-primary)] shadow-[var(--shadow-soft)]">
            <span className="absolute top-4 left-4 bg-[var(--surface-input)] text-[var(--text-secondary)] border border-[var(--border-primary)] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-sm">
              Bestseller
            </span>
            <button className="absolute top-4 right-4 w-10 h-10 bg-[var(--surface-card)] border border-[var(--border-primary)] rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] shadow-sm transition z-10">
              <Heart className="w-4 h-4" />
            </button>
            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "high-quality" }}
            />

            <div 
              className={`absolute inset-0 pointer-events-none transition-all duration-500 ${currentVariant.tailwindOverlay}`} 
            />
          </div>
        </div>

        {/* Right Column: Control Selections & Commercial Specifications Panel */}
        <div className="w-full flex flex-col items-start space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[var(--text-primary)]">
              {product.name}
            </h1>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-serif font-medium text-[var(--text-primary)]">₹{product.price}</span>
              <span className="text-base text-[var(--text-muted)] line-through">₹{originalPrice}</span>
              <span className="text-xs font-medium text-[var(--accent)] border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                {discountPercent}% OFF
              </span>
            </div>
            <p className="text-sm font-light text-[var(--text-secondary)] mt-2">Earn 10% Cashback on this delivery collection setup</p>
          </div>

          {/* Color Switch Swatches Row Selection Matrix */}
          <div className="space-y-4 w-full">
            <label className="text-xs uppercase font-medium tracking-widest text-[var(--text-secondary)] block">
              Color: <span className="text-[var(--text-primary)] lowercase">{currentVariant.name}</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {finalVariants.map((v, idx) => (
                <button
                  key={v.name}
                  onClick={() => handleVariantChange(idx)}
                  title={v.name}
                  className={`w-11 h-11 rounded-full border-2 transition shrink-0 transform active:scale-95 ${
                    (selectedVariantIndex !== undefined ? selectedVariantIndex : initialIndex) === idx 
                      ? "border-[var(--btn-primary)] ring-4 ring-[var(--btn-primary)]/10 scale-105 shadow-sm" 
                      : "border-[var(--border-primary)] opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: v.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Choice Structural Layout */}
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between max-w-[320px]">
              <label className="text-xs uppercase font-medium tracking-widest text-[var(--text-secondary)]">
                Select Size
              </label>
              <button className="text-xs font-medium text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--text-secondary)]">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`min-w-[56px] h-12 border text-sm font-medium rounded-2xl transition ${
                    selectedSize === sz
                      ? "bg-[var(--btn-primary)] text-white border-[var(--btn-primary)] shadow-sm"
                      : "border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--btn-primary)] bg-[var(--surface-card)]"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Button Handlers */}
          <div className="pt-4 w-full max-w-[320px]">
            <button 
              onClick={handleAddToCart}
              className="luxury-button-primary w-full h-14 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" /> Add Outfit To Bag
            </button>
          </div>

          {/* Trust Value Badging Grid */}
          <div className="border-t border-[var(--border-primary)] pt-8 w-full max-w-[450px] grid grid-cols-3 gap-4 text-center text-[10px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-5 h-5 text-[var(--text-muted)]" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw className="w-5 h-5 text-[var(--text-muted)]" />
              <span>7 Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--text-muted)]" />
              <span>100% Genuine</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}