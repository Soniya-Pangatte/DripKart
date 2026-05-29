import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
        } else {
          setProducts(data || []);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supabase Products Test</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500 mb-4">Error: {error}</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-slate-600">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
