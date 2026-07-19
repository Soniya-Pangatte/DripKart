import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="mt-24 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-8">
      <div className="relative mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-md bg-white border border-slate-200 px-4 py-2 text-sm text-slate-900">
            <Sparkles className="h-4 w-4" />
            <span>Limited release</span>
          </div>
          <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Step into the next era of essential streetwear.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Experience clean lines, soft textures, and refined product storytelling with everything you need for minimal everyday style.
          </p>
          <Button className="rounded-md bg-slate-900 text-white px-6 py-3 text-sm hover:bg-slate-800" size="lg">
            Shop the collection
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8">
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Feature Spotlight</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">Clean layers, soft surfaces, and simple style.</h3>
            <p className="mt-4 max-w-lg text-slate-600">
              Showcase essential pieces with clarity, subtlety, and elegant states that feel polished on every device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
