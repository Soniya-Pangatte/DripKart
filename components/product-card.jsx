"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-sm">
      <div className="relative space-y-5">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-slate-50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-600 border border-slate-200">
            {product.category}
          </span>
          <div className="relative overflow-hidden rounded-lg bg-slate-100">
  <img
    src={product.image}
    alt={product.name}
    className="aspect-4/5 w-full object-cover rounded-lg"
  />
</div>
<Link href={`/product/${product.id}`}>
  <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-sm">
    ...
  </article>
</Link>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-slate-100 p-0">
          
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-600">{product.price}</p>
            </div>
            <div className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-slate-900" />
                <span>{product.rating}</span>
              </div>
              <span className="text-[0.7rem] text-slate-500">({product.reviews})</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button
             onClick={() => addToCart(product)}
             className="rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 flex-1"
              >
            Add to cart
          </Button>
            <Button variant="outline" size="sm" className="rounded-md px-4 py-2 border-slate-200 text-slate-600 hover:bg-slate-50">
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
