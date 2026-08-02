"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="flex-grow bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased flex items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full overflow-hidden rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-card)] shadow-[var(--shadow-hover)] transition duration-300 hover:shadow-[var(--shadow-soft)]">
        <div className="bg-[var(--bg-section)] border-b border-[var(--border-primary)] px-8 py-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
            Customer care
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-light leading-tight tracking-tight text-[var(--text-primary)] md:text-5xl">
            Inquiries, styling, and tailored service.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            Reach out for order support, styling advice, and bespoke delivery details. Our quiet luxury concierge is available daily.
          </p>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Business Hours: Monday – Sunday, 7 AM – 10 PM ·
            <a
              href="mailto:info@dripkart.com"
              className="ml-1 font-medium text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent-camel)]"
            >
              info@dripkart.com
            </a>
          </p>
        </div>

        <div className="p-8 sm:p-12">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                  First Name <span className="text-[var(--accent-terra)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="luxury-input p-4 text-sm placeholder:text-[var(--text-muted)]"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="luxury-input p-4 text-sm placeholder:text-[var(--text-muted)]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                Your Email <span className="text-[var(--accent-terra)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                className="luxury-input p-4 text-sm placeholder:text-[var(--text-muted)]"
              />
            </div>

            {/* Inquiry */}
            <div className="flex flex-col gap-2">
              <label htmlFor="inquiry" className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                Your Inquiry <span className="text-[var(--accent-terra)]">*</span>
              </label>
              <textarea
                id="inquiry"
                rows={6}
                value={formData.inquiry}
                onChange={handleChange}
                required
                placeholder="Enter your inquiry"
                className="luxury-input min-h-[170px] p-4 text-sm placeholder:text-[var(--text-muted)] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="luxury-button-primary w-full max-w-xs px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}