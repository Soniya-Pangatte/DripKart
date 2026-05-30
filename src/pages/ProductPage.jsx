"use client"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useCartStore } from "@/lib/cartStore"; // Assuming this is your cart store path

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bring in the addToCart action from your Zustand store
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
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  // Minimalist loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-slate-900">
        <p className="text-sm font-semibold tracking-widest uppercase">Loading...</p>
      </div>
    );
  }

  // Minimalist error state
  if (error || !product) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-slate-900">
        <p className="text-lg font-light text-red-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price, // Keep the same property names your cart expects
      image: product.image,
      qty: 1
    });
    alert("Added to cart!"); // Simple feedback for now
  };

  return (
    <main className="flex-grow bg-white text-slate-900 antialiased">
      <div className="max-w-7xl mx-auto px-10 py-24 flex flex-col md:flex-row gap-16 items-center min-h-[600px]">
        
        {/* Left Side: Large Product Image (No rounded corners) */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[700px] object-cover"
          />
        </div>

        {/* Right Side: Minimalist Product Details */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{product.name}</h1>
          
          <p className="text-2xl text-slate-600 font-light mb-8">₹{product.price}</p>
          
          <p className="text-slate-600 font-light leading-relaxed mb-12">
            {/* If your database has a description column, use {product.description} here instead */}
            A beautiful, minimalist piece to elevate your everyday collection. Expertly crafted for comfort and style.
          </p>

          <button 
            onClick={handleAddToCart}
            className="bg-black text-white px-12 py-4 text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </main>
  );
}