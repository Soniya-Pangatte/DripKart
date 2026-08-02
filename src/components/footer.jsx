"use client"

import { Link } from "react-router-dom";

// Minimal inline SVGs
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-footer)] pt-[80px] pb-[60px] px-4 sm:px-6 lg:px-8 text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col items-start space-y-6">
          <Link to="/" className="text-xl font-serif tracking-[0.15em] uppercase">
            DripKart
          </Link>
          <p className="text-sm font-light text-[var(--text-secondary)] leading-relaxed max-w-xs">
            A quiet narrative of refined essentials. Timeless pieces designed for a curated lifestyle.
          </p>
          <div className="flex space-x-5 pt-4 text-[var(--text-primary)]">
            <a href="#" aria-label="Instagram" className="hover:text-[var(--text-secondary)] transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[var(--text-secondary)] transition-colors"><TwitterIcon /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--text-secondary)] transition-colors"><FacebookIcon /></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-2">Explore</h4>
          <Link to="/shop" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Shop Collection</Link>
          <Link to="/about" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">About Us</Link>
          <Link to="#" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Campaigns</Link>
          <Link to="#" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Journal</Link>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-2">Support</h4>
          <Link to="/contact" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Contact Us</Link>
          <Link to="#" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Shipping & Returns</Link>
          <Link to="#" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">FAQ</Link>
          <Link to="#" className="text-sm font-light text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Size Guide</Link>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-2">Newsletter</h4>
          <p className="text-sm font-light text-[var(--text-secondary)]">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="mt-2 relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border-b border-[var(--border-primary)] py-3 text-sm focus:outline-none focus:border-[var(--btn-primary)] transition-colors"
            />
            <button type="submit" className="absolute right-0 top-3 text-[var(--text-primary)] hover:text-[var(--text-secondary)] uppercase text-xs tracking-widest font-medium">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl mt-24 pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[var(--text-muted)]">
        <p>© {new Date().getFullYear()} DripKart. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="#" className="hover:text-[var(--text-secondary)] transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-[var(--text-secondary)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}