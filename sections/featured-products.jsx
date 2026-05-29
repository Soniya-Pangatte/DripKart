import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import { supabase } from "../lib/supabaseClient";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        setError(error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <section id="shop" className="mt-28">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Featured Products
        </p>

        <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          Designed for minimal presence.
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
          A curated lineup of simple and clean products from Supabase.
        </p>
      </div>

      {loading && (
        <p className="text-center mt-10 text-slate-500">
          Loading products...
        </p>
      )}

      {error && (
        <p className="text-red-500 text-center mt-4">
          {error.message}
        </p>
      )}

      {!loading && !error && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}