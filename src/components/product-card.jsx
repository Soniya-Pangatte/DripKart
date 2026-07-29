"use client";

import { Link } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  return (
    <article className="luxury-card group relative overflow-hidden p-5 flex flex-col h-full">

      <div className="space-y-5 flex flex-col h-full">

        {/* CATEGORY */}
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[var(--surface-input)] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] font-medium text-[var(--text-secondary)] border border-[var(--border-primary)]">
            {product.category}
          </span>
        </div>

        {/* IMAGE */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-xl bg-[var(--bg-section)] aspect-4/5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* INFO */}
        <div className="space-y-4 flex-grow flex flex-col justify-end">

          <div className="flex items-start justify-between gap-3">

            <div>
              <Link to={`/product/${product.id}`} className="hover:underline underline-offset-4 decoration-[var(--border-primary)] transition-all">
                <h3 className="text-lg font-serif font-medium text-[var(--text-primary)] leading-snug">
                  {product.name}
                </h3>
              </Link>

              <p className="text-sm font-medium text-[var(--text-secondary)] mt-1">
                ₹{product.price}
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-[var(--surface-input)] border border-[var(--border-primary)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] flex items-center gap-1.5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]">
              <Star className="h-3.5 w-3.5 text-[var(--accent)] fill-current" />
              <span className="font-medium">{product.rating}</span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => {
                console.log("ADDING:", product);
                addToCart(product);
              }}
              className="luxury-button-primary flex-1 py-3 text-sm flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>

            <button
              className="luxury-button-secondary p-3 flex-shrink-0 flex items-center justify-center"
              aria-label="Add to wishlist"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>

    </article>
  );
}