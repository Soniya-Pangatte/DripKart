import ProductCard from "@/components/product-card";
import { supabase } from "@/lib/supabaseClient";

export default async function FeaturedProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  return (
    <section id="shop" className="mt-28">
      
      {/* HEADER */}
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

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-center mt-4">
          {error.message}
        </p>
      )}

      {/* PRODUCTS GRID */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
