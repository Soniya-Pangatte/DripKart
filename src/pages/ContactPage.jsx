"use client"


export default function ContactPage() {
  return (
    <main className="flex-grow bg-white text-slate-900 antialiased flex flex-col min-h-screen">
      
      {/* Contact Header */}
      <div className="py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Customer service inquiries</h2>
        <p className="text-slate-800 font-light">Business Hours: Monday through Sunday, 7 AM – 10 PM</p>
        <p className="text-slate-800 font-light mt-1">
          Email: <a href="mailto:info@dripkart.com" className="underline hover:text-slate-500">info@dripkart.com</a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto w-full px-10 mb-24 flex-grow">
        <form className="space-y-8 flex flex-col" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-slate-800 font-light">Name*</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
              className="bg-[#f5f5f5] text-slate-900 w-full p-4 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-shadow"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName" className="text-slate-800 font-light">Last name</label>
            <input 
              type="text" 
              id="lastName" 
              placeholder="Your last name" 
              className="bg-[#f5f5f5] text-slate-900 w-full p-4 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-shadow"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-slate-800 font-light">Your email*</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your email address" 
              className="bg-[#f5f5f5] text-slate-900 w-full p-4 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-shadow"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="inquiry" className="text-slate-800 font-light">Your inquiry*</label>
            <textarea 
              id="inquiry" 
              rows="5" 
              placeholder="Enter your inquiry" 
              className="bg-[#f5f5f5] text-slate-900 w-full p-4 focus:outline-none focus:ring-1 focus:ring-slate-300 transition-shadow resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-black text-white px-12 py-4 text-sm tracking-widest uppercase hover:bg-slate-800 transition-colors mx-auto mt-4 block"
          >
            Send
          </button>
        </form>
      </div>
      
    </main>
  );
}