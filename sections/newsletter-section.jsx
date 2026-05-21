"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(email ? "Thanks for subscribing!" : "Enter your email.");
  }

  return (
    <section id="support" className="mt-24 rounded-xl border border-slate-200 bg-slate-50 p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Newsletter</p>
          <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Stay ahead of every drop.</h2>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Join the list for product launches, restocks, and minimal styling notes from the DripKart team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-900">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@domain.com"
                className="rounded-md bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
              />
            </div>
            <Button type="submit" className="rounded-md px-6 py-3 text-sm bg-slate-900 text-white hover:bg-slate-800" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
