import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function handleCheckout() {
    alert("Payment Successful 🎉");
    clearCart();
    navigate("/");
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 min-h-[60vh]">
      <h1 className="text-4xl font-serif font-light mb-10 text-[var(--text-primary)]">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Order Summary */}
        <div className="space-y-6">
          <h2 className="text-xl font-serif font-medium text-[var(--text-primary)] border-b border-[var(--border-primary)] pb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 rounded-2xl shadow-sm"
              >
                <div>
                  <h3 className="font-serif font-medium text-[var(--text-primary)]">{item.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">Qty: {item.qty}</p>
                </div>
                <p className="font-medium text-[var(--text-primary)]">₹{item.price * item.qty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Payment Details */}
        <div className="space-y-8 bg-[var(--surface-card)] p-8 rounded-3xl border border-[var(--border-primary)] shadow-[var(--shadow-soft)]">
          <h2 className="text-xl font-serif font-medium text-[var(--text-primary)] border-b border-[var(--border-primary)] pb-4">
            Payment Details
          </h2>
          
          <div className="space-y-4">
            <div className="relative">
              <input type="text" placeholder="Cardholder Name" className="luxury-input" />
            </div>
            <div className="relative">
              <input type="text" placeholder="Card Number" className="luxury-input" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input type="text" placeholder="MM/YY" className="luxury-input" />
              </div>
              <div className="relative">
                <input type="text" placeholder="CVC" className="luxury-input" />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-primary)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[var(--text-secondary)] font-medium">Total to Pay</span>
              <span className="text-2xl font-serif font-medium text-[var(--text-primary)]">₹{total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="luxury-button-primary w-full py-4 text-lg"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
