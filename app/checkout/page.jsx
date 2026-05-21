"use client";

import { useCartStore } from "@/lib/cartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const router = useRouter();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  function handleCheckout() {
    alert("Payment Successful 🎉");

    clearCart();

    router.push("/");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border p-4 rounded-lg"
          >
            <div>
              <h2 className="font-semibold">
                {item.name}
              </h2>

              <p className="text-slate-500">
                Qty: {item.qty}
              </p>
            </div>

            <p>
              ₹{item.price * item.qty}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Total: ₹{total}
        </h2>

        <button
          onClick={handleCheckout}
          className="bg-slate-900 text-white px-6 py-3 rounded-md"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}