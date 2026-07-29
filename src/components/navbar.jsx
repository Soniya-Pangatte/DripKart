"use client"

import { Link } from "react-router-dom";
import { useCartStore } from "@/lib/cartStore";
import { Menu, Search, ShoppingBag, User, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-nav)] border-b border-[var(--border-primary)] backdrop-blur-md shadow-[0_4px_20px_rgba(46,39,35,0.02)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 text-[var(--text-primary)]">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-section)] text-[var(--text-primary)] shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.28em]">DripKart</span>
            <span className="text-xs text-[var(--text-secondary)]">Quiet luxury essentials</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] transition hover:bg-[var(--btn-secondary-hover)] hover:border-[var(--btn-primary)]">
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/cart"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] transition hover:bg-[var(--btn-secondary-hover)] hover:border-[var(--btn-primary)]"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--btn-primary)] text-white text-[0.65rem] font-medium">
                  {cartCount}
                </span>
              )}
            </Link>
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] transition hover:bg-[var(--btn-secondary-hover)] hover:border-[var(--btn-primary)]">
              <User className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-3 ml-2 border-l border-[var(--border-primary)] pl-5">
              <Link to="/login">
                <button className="luxury-button-secondary">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="luxury-button-primary">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-primary)] hover:bg-[var(--btn-secondary-hover)] transition">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[var(--bg-primary)] border-[var(--border-primary)]">
              <SheetHeader>
                <div className="flex items-center justify-between gap-3">
                  <SheetTitle className="text-[var(--text-primary)] font-serif font-normal">Menu</SheetTitle>
                  <SheetClose asChild>
                    <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-transparent text-[var(--text-secondary)] transition hover:bg-[var(--btn-secondary-hover)]">
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>
                <SheetDescription className="text-[var(--text-muted)]">Navigate our collections.</SheetDescription>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] px-5 py-4 text-lg font-medium text-[var(--text-primary)] transition hover:border-[var(--btn-primary)] hover:shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[var(--bg-section)] p-5 border border-[var(--border-primary)]">
                <p className="text-sm text-[var(--text-secondary)] mb-5">Elevate your wardrobe.</p>
                <div className="flex flex-col gap-3">
                  <Link to="/login" className="w-full">
                    <button className="luxury-button-secondary w-full">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <button className="luxury-button-primary w-full">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}