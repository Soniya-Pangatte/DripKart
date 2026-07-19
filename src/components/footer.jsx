"use client"

import { Link } from "react-router-dom";

// Minimal inline SVGs to replace the removed Lucide brand icons
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Contact us", href: "/contact" },
  { label: "About us", href: "/about" },
  { label: "Payments & delivery", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-24 px-10 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start justify-between">
        
        {/* Left Side: Minimalist Link Stack */}
        <div className="mb-10 flex flex-col space-y-4 md:mb-0">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-light underline underline-offset-4 transition-colors hover:text-slate-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Support and Socials */}
        <div className="text-left md:text-right">
          <h3 className="mb-4 text-2xl font-light">Need help?</h3>
          
          <a
            href="mailto:help@dripkart.com"
            className="mb-6 block font-light underline underline-offset-4 transition-colors hover:text-slate-500"
          >
            help@dripkart.com
          </a>

          {/* Clean, borderless social icons using our custom SVGs */}
          <div className="flex justify-start space-x-6 text-slate-900 md:justify-end">
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-slate-500">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-slate-500">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-slate-500">
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Subtle Copyright */}
      <div className="mx-auto mt-20 max-w-7xl text-left text-xs font-light text-slate-400 md:text-right">
        © {new Date().getFullYear()} DripKart.
      </div>
    </footer>
  );
}