import { Link } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-slate-500">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-slate-600">
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>
                </div>

                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Total: ₹{total}</h2>

            <div className="flex gap-3">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>

              <Link to="/checkout">
                <Button className="bg-slate-900 text-white">Checkout</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
