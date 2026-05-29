"use client"

import { useCartStore } from "@/lib/cartStore";
import { Menu, Search, ShoppingBag, User, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/shop";
import { Link } from "react-router-dom";

export default function Navbar() {
 const cart = useCartStore((state) => state.cart);

console.log("CART:", cart);
  const cartCount = cart.reduce(
  (total, item) => total + item.qty,
  0
);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto flex max-w-330 items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3 text-slate-900">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 text-slate-900">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.28em]">DripKart</span>
            <span className="text-xs text-slate-500">Minimal essentials</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
              <Search className="h-5 w-5" />
            </button>
          <a
  href="/cart"
  className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
>
  <ShoppingBag className="h-5 w-5" />

  {cartCount > 0 && (
  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
    {cartCount}
  </span>
)}
</a>
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
              <User className="h-5 w-5" />
            </button>
     <div className="flex items-center gap-3">

  <Link href="/login">
    <button className="px-4 py-2 rounded-md border border-slate-300">
      Login
    </button>
  </Link>

  <Link href="/signup">
    <button className="px-4 py-2 rounded-md bg-slate-900 text-white">
      Sign Up
    </button>
  </Link>

</div>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-slate-900">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <div className="flex items-center justify-between gap-3">
                  <SheetTitle className="text-slate-900">Menu</SheetTitle>
                  <SheetClose asChild>
                    <button className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>
                <SheetDescription className="text-slate-500">Navigate our collections.</SheetDescription>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-md border border-slate-200 bg-white px-5 py-4 text-lg font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-md bg-slate-50 p-5 border border-slate-200">
                <p className="text-sm text-slate-600">Elevate your wardrobe.</p>
                <Button className="mt-5 w-full rounded-md px-5 py-3 text-sm bg-slate-900 text-white hover:bg-slate-800">
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
