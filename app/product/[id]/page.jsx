import { supabase } from "@/lib/supabaseClient";

export default async function ProductPage({ params }) {

  const resolvedParams = await params;
  const id = resolvedParams.id;

  console.log("ID:", id);

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", Number(id))
    .single();

  console.log(product);
  console.log(error);

  if (error || !product) {
    return (
      <div className="p-10 text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded-lg border"
      />

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-xl text-slate-600">
          ₹{product.price}
        </p>
      </div>

    </div>
  );
}