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
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
          Featured Products
        </p>

        <h2 className="text-4xl font-serif font-light text-[var(--text-primary)] sm:text-5xl">
          Designed for minimal presence.
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
          A curated lineup of refined essentials crafted for a quiet lifestyle.
        </p>
      </div>

      {loading && (
        <p className="text-center mt-10 text-[var(--text-muted)]">
          Loading products...
        </p>
      )}

      {error && (
        <p className="text-red-800 bg-red-50 p-4 rounded-xl border border-red-200 text-center mt-4">
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