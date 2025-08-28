import React, { useState } from 'react'
import Image from 'next/image'

export default function TicketingTool() {
  const [selectedFeature, setSelectedFeature] = useState(3) // Start with the 4th feature expanded

  const features = [
    {
      id: 0,
      title: "Stay connected across any channel",
      description: "Unify all customer conversations in one place. Whether it's email, chat, phone, or social media, agents have full context and history to provide seamless support.",
      image: "/img/ticketing/1.webp"
    },
    {
      id: 1,
      title: "Make it easy to find and prioritize work",
      description: "Smart routing and intelligent ticket assignment ensure agents focus on the most important work first. Advanced filtering and search capabilities help teams stay organized.",
      image: "/img/ticketing/2.png"
    },
    {
      id: 2,
      title: "Surface the best reply, every time",
      description: "AI-powered suggestions and knowledge base integration help agents provide accurate, consistent responses. Reduce response times while maintaining quality.",
      image: "/img/ticketing/3.png"
    },
    {
      id: 3,
      title: "Tailor workspaces to your specific needs",
      description: "Start quickly out-of-the-box, then let agents customize their workspace with adaptive layouts for improved focus and prioritization.",
      image: "/img/ticketing/4.mp4"
    }
  ]

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            AGENT TICKETING TOOLS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Drive 61% faster reply times with better agent tools
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Agent Workspace */}
          <div className="relative">
            {/* Dynamic Image/Video Display */}
            <div className="rounded-2xl overflow-hidden">
              {features[selectedFeature].image.endsWith('.mp4') ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-auto"
                  poster="/img/ticketing/3.png"
                >
                  <source src={features[selectedFeature].image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={features[selectedFeature].image}
                  alt={features[selectedFeature].title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>

          {/* Right Side - Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={feature.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedFeature(index)}
                  className={`w-full p-6 text-left transition-all duration-300 ${
                    selectedFeature === index 
                      ? 'bg-primary-lightest border-primary-light' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${
                      selectedFeature === index ? 'text-secondary' : 'text-text-primary'
                    }`}>
                      {feature.title}
                    </h3>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        selectedFeature === index 
                          ? 'text-primary rotate-180' 
                          : 'text-gray-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {selectedFeature === index && (
                    <div className="mt-4 animate-fade-in">
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg">
            Try it free for 14 days
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  )
}
