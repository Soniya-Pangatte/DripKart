"use client"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useCartStore } from "@/lib/cartStore";
import { Heart, ShoppingBag, ShieldCheck, RotateCcw, Truck } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Interface State Matrices
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
          
          // Determine initial color state selection by matching the item name string text
          const matchedIdx = AVAILABLE_COLORS.findIndex(v => 
            data.name.toLowerCase().includes(v.name.toLowerCase())
          );
          setSelectedVariantIndex(matchedIdx >= 0 ? matchedIdx : 0);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Global Color Overlays configuration mimicking multiple asset states instantly
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
      <div className="flex h-screen items-center justify-center bg-white text-slate-900">
        <p className="text-sm font-semibold tracking-widest uppercase">Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-slate-900">
        <p className="text-lg font-light text-red-500">Product not found</p>
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
    <main className="w-full max-w-7xl mx-auto min-h-screen px-6 py-12 md:py-20 font-sans text-zinc-900 bg-white antialiased">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Large Product Image Display Container */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[550px] aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-50 relative border border-zinc-100 shadow-sm">
            <span className="absolute top-4 left-4 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10 shadow-xs">
              Bestseller
            </span>
            <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-zinc-400 hover:text-red-500 shadow-md transition z-10">
              <Heart className="w-4 h-4" />
            </button>
            
            {/* Base Image Engine Loaded from Database Source */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              style={{ imageRendering: "high-quality" }}
            />

            {/* Dynamic CSS Color Shifting Matrix Overlay Window */}
            <div 
              className={`absolute inset-0 pointer-events-none transition-all duration-500 ${currentVariant.tailwindOverlay}`} 
            />
          </div>
        </div>

        {/* Right Column: Control Selections & Commercial Specifications Panel */}
        <div className="w-full flex flex-col items-start space-y-6">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-950">
              {product.name}
            </h1>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-zinc-950">₹{product.price}</span>
              <span className="text-base text-zinc-400 line-through">₹{originalPrice}</span>
              <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                {discountPercent}% OFF
              </span>
            </div>
            <p className="text-xs text-zinc-400">Earn 10% Cashback on this delivery collection setup</p>
          </div>

          {/* Color Switch Swatches Row Selection Matrix */}
          <div className="space-y-3 w-full">
            <label className="text-xs uppercase font-bold tracking-widest text-zinc-400 block">
              Color Combination: <span className="text-zinc-950 font-medium lowercase">({currentVariant.name})</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {finalVariants.map((v, idx) => (
                <button
                  key={v.name}
                  onClick={() => handleVariantChange(idx)}
                  title={v.name}
                  className={`w-10 h-10 rounded-full border-2 transition shrink-0 transform active:scale-95 ${
                    (selectedVariantIndex !== undefined ? selectedVariantIndex : initialIndex) === idx 
                      ? "border-zinc-950 ring-4 ring-zinc-900/15 scale-105 shadow-sm" 
                      : "border-zinc-200 opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: v.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Choice Structural Layout */}
          <div className="space-y-3 w-full">
            <div className="flex items-center justify-between max-w-[320px]">
              <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">
                Select Size
              </label>
              <button className="text-xs font-semibold text-zinc-950 underline hover:text-zinc-600">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["S", "M", "L", "XL", "XXL"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`min-w-[54px] h-11 border text-xs font-bold rounded-xl transition ${
                    selectedSize === sz
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                      : "border-zinc-200 text-zinc-800 hover:border-zinc-950"
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
              className="w-full h-14 bg-zinc-950 text-white text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-zinc-900 transition flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" /> Add Outfit To Bag
            </button>
          </div>

          {/* Trust Value Badging Grid */}
          <div className="border-t border-zinc-100 pt-6 w-full max-w-[450px] grid grid-cols-3 gap-4 text-center text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            <div className="flex flex-col items-center gap-1.5">
              <Truck className="w-5 h-5 text-zinc-300" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <RotateCcw className="w-5 h-5 text-zinc-300" />
              <span>7 Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-zinc-300" />
              <span>100% Genuine</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}