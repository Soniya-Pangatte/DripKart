import { TESTIMONIALS } from "@/lib/shop";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="mt-24" id="about">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Testimonials</p>
        <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Real reviews from minimal shoppers.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Crafted to build trust with a clean presentation and quiet confidence in every quote.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <article
            key={item.name}
            className="rounded-xl border border-slate-200 bg-white p-7 text-slate-600"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-semibold">
                {item.initials}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role} · {item.company}</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-900">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
