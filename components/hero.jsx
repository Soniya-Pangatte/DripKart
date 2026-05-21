import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20 bg-white">
      <div className="mx-auto max-w-330 px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <Sparkles className="h-4 w-4 text-slate-900" />
              <span>Premium streetwear, minimal design.</span>
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Welcome to DripKart</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] text-slate-900 sm:text-6xl md:text-7xl">
                Clean and simple essentials.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Discover everyday wear and minimal basics designed for the modern wardrobe.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="rounded-md bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800" size="lg">
                Shop Now
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="rounded-md border-slate-200 text-slate-900 px-6 py-3 text-sm" size="lg">
                Browse collections
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Fast global shipping",
                "Secure checkout",
                "Easy returns",
              ].map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  <div className="mb-2 flex items-center gap-2 text-slate-900">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="font-medium">{item}</span>
                  </div>
                  <p className="text-slate-500">Reliable and simple service.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md flex-col gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-xs uppercase tracking-[0.35em]">Featured Basic</span>
                  <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-[0.78rem] text-slate-900">New</span>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-slate-100 p-0 aspect-4/5 flex items-center justify-center">
                  <img src="/product_img.jpg" alt="Minimal White T-Shirt" className="h-full w-full object-cover" />
                </div>
                <div className="space-y-4 px-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Essential Tee</p>
                      <h2 className="text-xl font-semibold text-slate-900">Minimal White T-Shirt</h2>
                    </div>
                    <div className="rounded-md bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 border border-slate-200">
                      $35
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    A clean, soft, and essential piece for any minimalist wardrobe.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 flex-1">Add to cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
