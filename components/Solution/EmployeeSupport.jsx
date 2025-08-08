import React from 'react'
import Image from 'next/image'

export default function EmployeeSupport() {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              TICKETING FOR EMPLOYEE SERVICE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Streamline employee support for fast resolutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deliver seamless employee service with our smart ticketing platform. Unite teams and tools, automate workflows, and uncover trends to streamline operations and support your business as it grows.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get the details
            </button>
          </div>

          {/* Right Side - Image with Chat Bubbles */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/img/employee.webp"
                alt="Employees collaborating on laptop"
                width={600}
                height={400}
                className=""
              />
              
              {/* Chat Bubble 1 */}
              <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="text-sm text-gray-800">
                  What is our equipment replacement policy?
                </div>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
              </div>

              {/* Refresh Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>

              {/* Chat Bubble 2 */}
              <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="text-sm text-gray-800 mb-2">
                  Need a replacement? Here you go.
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Equipment.doc</span>
                </div>
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Awards Text */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              OUR AWARD-WINNING SERVICE SOLUTION
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Recognized by industry leaders
            </h2>
          </div>

       <Image src="/img/leader.webp" alt="Employee Support" width={600} height={400} className='' />
        </div>
      </div>
    </div>
  )
}