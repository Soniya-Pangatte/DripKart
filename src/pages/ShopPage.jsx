"use client"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { supabase } from "@/lib/supabaseClient";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products from your Supabase 'products' table
    const fetchProducts = async () => {
      setLoading(true);
      
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setProducts(data);
      }
      
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Minimalist loading state
  if (loading) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <p className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)]">Loading collection...</p>
      </div>
    );
  }

  // Minimalist error state
  if (error) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <p className="text-lg font-light text-red-700 bg-red-50 p-4 rounded-xl border border-red-200">Failed to load products: {error}</p>
      </div>
    );
  }

  return (
    <main className="flex-grow bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-[80vh]">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Shop All</h1>
        <p className="text-[var(--text-secondary)] font-light text-lg">Discover our complete collection.</p>
      </div>

      {/* The Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="luxury-card group cursor-pointer block p-5">
            <div className="overflow-hidden mb-5 rounded-xl bg-[var(--bg-section)] border border-[var(--border-primary)] flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-lg font-serif font-medium text-[var(--text-primary)] leading-tight hover:underline underline-offset-4 decoration-[var(--border-primary)] transition-all">
              {product.name}
            </h3>
            <p className="text-[var(--text-secondary)] mt-1.5 font-medium">₹{product.price}</p> 
          </Link>
        ))}
      </div>
    </main>
  );
}