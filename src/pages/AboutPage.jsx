"use client"

export default function AboutPage() {
  return (
    <main className="flex-grow bg-white text-slate-900 antialiased">
      
      {/* Headline */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light">We Believe In Everyone Having A Say</h2>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-10 mb-16"> 
        <img src="/abt.jpg" alt="About Us" className="w-full h-[400px] md:h-[600px] object-contain" />
       </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto px-10 text-center mb-24">
        <p className="text-lg text-slate-800 font-light leading-relaxed">
          We make clothes designed to highlight your lifestyle. We work with some of the most exciting up-and-coming designers to create looks that are as fresh as they are exciting. Our individual pieces can find a comfortable home in any wardrobe, while also going together to make killer looks.
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-32">
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Sustainability</h3>
          <p className="text-slate-700 font-light">All our materials and production processes are designed to have minimal impact on the planet.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Transparency</h3>
          <p className="text-slate-700 font-light">We strive to be open and honest about how we make our clothes and conduct business.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Fairness</h3>
          <p className="text-slate-700 font-light">We ensure that every party in our supply chain is paid a fair income for their work.</p>
        </div>
      </div>

    </main>
  );
}