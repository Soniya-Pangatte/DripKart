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
      <div className="flex h-[600px] items-center justify-center bg-white text-slate-900">
        <p className="text-sm font-semibold tracking-widest uppercase">Loading collection...</p>
      </div>
    );
  }

  // Minimalist error state
  if (error) {
    return (
      <div className="flex h-[600px] items-center justify-center bg-white text-slate-900">
        <p className="text-lg font-light text-red-500">Failed to load products: {error}</p>
      </div>
    );
  }

  return (
    <main className="flex-grow bg-white text-slate-900 antialiased py-20 px-10 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Shop All</h1>
        <p className="text-slate-600 font-light text-lg">Discover our complete collection.</p>
      </div>

      {/* The Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
            <div className="overflow-hidden mb-4 bg-slate-50 flex items-center justify-center">
              {/* Changed object-cover to object-contain and added p-4 */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[450px] object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-lg font-light text-slate-900">{product.name}</h3>
            <p className="text-slate-600 mt-2 font-light">₹{product.price}</p> 
          </Link>
        ))}
      </div>
    </main>
  );
}