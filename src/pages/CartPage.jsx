import { Link } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 min-h-[60vh]">
      <h1 className="text-4xl font-serif font-light mb-10 text-[var(--text-primary)]">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[var(--text-muted)] text-lg mb-6">Your cart is currently empty.</p>
          <Link to="/shop">
            <button className="luxury-button-primary">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-[var(--border-primary)]"
                  />
                  <div>
                    <h2 className="font-serif font-medium text-lg text-[var(--text-primary)]">{item.name}</h2>
                    <p className="text-[var(--text-secondary)] mt-1">
                      ₹{item.price} × {item.qty}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm font-medium text-red-700 hover:text-red-900 transition underline underline-offset-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--border-primary)] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl font-serif font-medium text-[var(--text-primary)]">Total: ₹{total}</h2>

            <div className="flex gap-4 w-full md:w-auto">
              <button onClick={clearCart} className="luxury-button-secondary flex-1 md:flex-none">
                Clear Cart
              </button>

              <Link to="/checkout" className="flex-1 md:flex-none">
                <button className="luxury-button-primary w-full">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
