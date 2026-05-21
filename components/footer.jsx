import { ExternalLink } from "lucide-react";

const socials = [
  { label: "Instagram", icon: ExternalLink, href: "#" },
  { label: "Twitter", icon: ExternalLink, href: "#" },
  { label: "Github", icon: ExternalLink, href: "#" },
  { label: "LinkedIn", icon: ExternalLink, href: "#" },
];

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

const company = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-16 text-slate-600">
      <div className="mx-auto flex max-w-330 flex-col gap-12 px-6 md:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-70 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">DripKart</p>
          <h2 className="text-2xl font-semibold text-slate-900">Minimal streetwear basics.</h2>
          <p className="text-sm leading-7 text-slate-600">
            Clean design, simple interactions, and modern essential branding in one place.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-900">Shop</h3>
            <div className="space-y-3 text-sm text-slate-600">
              {links.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-900">Company</h3>
            <div className="space-y-3 text-sm text-slate-600">
              {company.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-slate-900">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-900">Support</h3>
            <p className="text-sm leading-7 text-slate-600">
              Need help? Reach our support team for styling, sizing, or shipping details.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-330 border-t border-slate-200 px-6 pt-8 text-sm text-slate-500 md:px-8">
        <p>© 2026 DripKart. Crafted for the minimal shopper.</p>
      </div>
    </footer>
  );
}
