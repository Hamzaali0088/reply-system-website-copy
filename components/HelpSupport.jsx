import React from 'react';

const logos = [
  { src: '/img/helpsupport/1.png', alt: 'Alex and Ani' },
  { src: '/img/helpsupport/2.png', alt: 'Petco' },
  { src: '/img/helpsupport/3.png', alt: 'Hormel' },
  { src: '/img/helpsupport/4.png', alt: 'Dean' },
  { src: '/img/helpsupport/5.png', alt: 'Meijer' },
];

export default function HelpSupport() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center pt-12 pb-0 px-2">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
        {/* Left: Form */}
        <div className="flex-1 w-full max-w-lg md:pl-2">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-1 leading-tight">Help support</h2>
          <p className="text-accent-blue text-base md:text-lg mb-8 mt-1">Please fill these fields for support ticket</p>
          <form className="flex flex-col gap-5 w-full max-w-[430px]">
            <input type="text" placeholder="Full Name *" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-base w-full" />
            <input type="text" placeholder="Company name" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-base w-full" />
            <select className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-base text-gray-500 w-full">
              <option>Your Support Challenges (optional)</option>
              <option>Technical Issue</option>
              <option>Billing</option>
              <option>Account Access</option>
              <option>Other</option>
            </select>
            <button type="submit" className="bg-accent-dark text-white font-semibold rounded-md px-8 py-3 mt-2 shadow-md hover:bg-accent-dark-hover transition  text-lg">Submit</button>
          </form>
          <p className="text-xs text-text-primary mt-3 font-semibold text-left max-w-[430px]">
            <span className="font-bold">Note:</span> <span className="font-normal">After you submit, our team will personally reach out to discuss your ideal setup.</span>
          </p>
        </div>
        {/* Right: Overlapping Images */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-w-[200px] md:pl-8 mt-10 md:mt-0">
          <div className="relative w-[90vw] max-w-[400px] h-[60vw] max-h-[400px] md:w-[400px] md:h-[400px]">
            <div className="absolute z-20 top-0 left-0 w-[70vw] max-w-[350px] h-[70vw] max-h-[350px] rounded-2xl overflow-hidden shadow-xl bg-white md:w-[350px] md:h-[350px]">
              <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" alt="Support 1" className="object-cover w-full h-full" />
            </div>
            <div className="absolute z-10 left-8 top-12 w-[70vw] max-w-[350px] h-[70vw] max-h-[350px] rounded-xl overflow-hidden shadow-xl bg-white md:left-16 md:top-24 md:w-[350px] md:h-[350px]">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Support 2" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Logos row */}
      <div className="w-full flex flex-col items-center mt-8 md:mt-16 mb-0">
        <div className="bg-bg-light py-4 px-2 md:py-5 md:px-8 grid grid-cols-5 justify-center bg-gray-100 items-center gap-4 md:gap-6 w-full max-w-6xl">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center w-full sm:w-auto h-full max-h-[90px]">
              <img src={logo.src} alt={logo.alt} width={150} height={100} className=" object-contain grayscale mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 