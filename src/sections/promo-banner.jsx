import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="mt-24 overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-section)] p-8">
      <div className="relative mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--surface-card)] border border-[var(--border-primary)] px-4 py-2 text-xs uppercase tracking-widest text-[var(--text-primary)]">
            <Sparkles className="h-4 w-4" />
            <span>Limited release</span>
          </div>
          <h2 className="text-4xl font-serif font-light text-[var(--text-primary)] sm:text-5xl">Step into the next era of essential streetwear.</h2>
          <p className="max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Experience clean lines, soft textures, and refined product storytelling with everything you need for minimal everyday style.
          </p>
          <button className="luxury-button-primary">
            Shop the collection
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-8">
          <div className="rounded-2xl bg-[var(--bg-section)] border border-[var(--border-primary)] p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Feature Spotlight</p>
            <h3 className="mt-4 text-3xl font-serif font-light text-[var(--text-primary)]">Clean layers, soft surfaces, and simple style.</h3>
            <p className="mt-4 max-w-lg text-[var(--text-secondary)]">
              Showcase essential pieces with clarity, subtlety, and elegant states that feel polished on every device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
