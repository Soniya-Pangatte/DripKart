import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  // ADD ITEM
  addToCart: (product) => {
    const existing = get().cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      set({
        cart: get().cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      });
    } else {
      set({
        cart: [...get().cart, { ...product, qty: 1 }],
      });
    }
  },

  // REMOVE ITEM
  removeFromCart: (id) => {
    set({
      cart: get().cart.filter((item) => item.id !== id),
    });
  },

  // CLEAR CART
  clearCart: () => set({ cart: [] }),
}));