"use client"

export default function AboutPage() {
  return (
    <main className="flex-grow bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
      
      {/* Headline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-light">We Believe In Everyone Having A Say</h2>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <img src="/abt.jpg" alt="About Us" className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl border border-[var(--border-primary)] shadow-[var(--shadow-soft)]" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            We make clothes designed to highlight your lifestyle. We work with some of the most exciting up-and-coming designers to create looks that are as fresh as they are exciting. Our individual pieces can find a comfortable home in any wardrobe, while also going together to make killer looks.
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Sustainability</h3>
            <p className="text-[var(--text-secondary)] font-light">All our materials and production processes are designed to have minimal impact on the planet.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Transparency</h3>
            <p className="text-[var(--text-secondary)] font-light">We strive to be open and honest about how we make our clothes and conduct business.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Fairness</h3>
            <p className="text-[var(--text-secondary)] font-light">We ensure that every party in our supply chain is paid a fair income for their work.</p>
          </div>
        </div>
      </section>

    </main>
  );
}