import React from "react";
import Image from "next/image";

export default function SolutionHero() {
  return (
    <section className="pt-36 lg:pt-52 pb-16 bg-white relative overflow-hidden mx-3">
   
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Small headline */}
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              HELP DESK TICKETING SOFTWARE
            </p>
            
            {/* Main title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
        AI-powered <span className="text-primary">ticketing system</span>
            </h1>
            
            {/* Description */}
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Zendesk Ticketing brings email, messaging, phone, social, and more into a single place. With AI automations and simple admin tools, our scalable ticketing tool cuts support costs and drives fast results. No expertise needed.
              </p>
            </div>
            
            {/* Call to action button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 bg-primary text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch a demo
              </button>
            </div>
          </div>
          
          {/* Right side - Solution image */}
          <div className="relative">
            <div className="rounded-2xl p-1">
              <div className="bg-white rounded-2xl overflow-hidden ">
                <Image
                  src="/img/solution.webp"
                  alt="AI-powered ticketing system demonstration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating chat icon */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
