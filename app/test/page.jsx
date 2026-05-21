import { supabase } from "@/lib/supabaseClient";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Supabase Products Test
      </h1>

      {/* ERROR DISPLAY */}
      {error && (
        <p className="text-red-500 mb-4">
          Error: {error.message}
        </p>
      )}

      {/* DATA DISPLAY */}
      <div className="space-y-4">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded"
            />

            <h2 className="text-lg font-semibold mt-2">
              {product.name}
            </h2>

            <p className="text-slate-600">
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}