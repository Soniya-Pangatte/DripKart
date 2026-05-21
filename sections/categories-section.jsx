import { Layers, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { CATEGORIES } from "@/lib/shop";

const iconMap = {
  Layers,
  ShieldCheck,
  TrendingUp,
  Zap,
};

export default function CategoriesSection() {
  return (
    <section id="collections" className="mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Categories</p>
          <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Minimal drops by category.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-base">
          Discover distinct collections built for structure, comfort, and minimal presence.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CATEGORIES.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <article
              key={item.id}
              className="group rounded-xl border border-slate-200 bg-white p-7 transition hover:shadow-sm"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-slate-50 text-slate-900 border border-slate-200">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
