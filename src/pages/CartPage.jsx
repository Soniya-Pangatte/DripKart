import { Link } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-serif font-light mb-10 text-[var(--text-primary)]">Your Cart</h1>

        <div className="space-y-8">
          {cart.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-card)] shadow-[var(--shadow-soft)]">
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
                    className="flex flex-col lg:flex-row items-start lg:items-center justify-between border border-[var(--border-primary)] bg-[var(--surface-card)] p-6 rounded-3xl shadow-[var(--shadow-soft)] gap-4"
                  >
                    <div className="flex items-center gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-3xl border border-[var(--border-primary)]"
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

              <div className="mt-12 border-t border-[var(--border-primary)] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl font-serif font-medium text-[var(--text-primary)]">Total: ₹{total}</h2>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button onClick={clearCart} className="luxury-button-secondary w-full sm:w-auto">
                    Clear Cart
                  </button>

                  <Link to="/checkout" className="w-full sm:w-auto">
                    <button className="luxury-button-primary w-full">Checkout</button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
