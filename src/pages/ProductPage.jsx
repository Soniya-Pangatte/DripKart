import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div className="max-w-5xl mx-auto p-6">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-red-500">
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
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-slate-600">₹{product.price}</p>
      </div>
    </div>
  );
}
