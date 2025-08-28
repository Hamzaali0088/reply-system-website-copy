import React from 'react';

export default function TryItFree() {
  return (
    <section className="bg-primary py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-6">Try It Free</h2>
      <div className="text-2xl md:text-3xl font-bold text-center text-secondary mb-6">
        Experience a Support System Built for You — Free!
      </div>
      <div className="text-lg md:text-xl text-center text-secondary mb-10 max-w-2xl">
        We offer a free consultation and trial workspace tailored to your business. No templates. No guesswork. Just real, managed support.
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white text-secondary font-bold px-8 py-3 rounded-md shadow text-base md:text-lg hover:bg-gray-100 transition-colors">
          Try It Free <span className="ml-1 text-lg">→</span>
        </button>
        <button className="bg-secondary text-white font-bold px-8 py-3 rounded-md shadow text-base md:text-lg hover:bg-secondary/80 transition-colors">
          Schedule Demo
        </button>
      </div>
    </section>
  );
} 