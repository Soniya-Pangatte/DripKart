import { TESTIMONIALS } from "@/lib/shop";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Testimonials</p>
        <h2 className="mt-4 text-4xl font-serif font-light text-[var(--text-primary)] sm:text-5xl">Real reviews from minimal shoppers.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
          Crafted to build trust with a clean presentation and quiet confidence in every quote.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <article
            key={item.name}
            className="luxury-card p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-input)] border border-[var(--border-primary)] text-[var(--text-primary)] font-serif text-lg">
                {item.initials}
              </div>
              <div>
                <p className="font-serif font-medium text-[var(--text-primary)]">{item.name}</p>
                <p className="text-sm text-[var(--text-muted)]">{item.role} · {item.company}</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-7 text-[var(--text-secondary)] font-light">“{item.quote}”</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
