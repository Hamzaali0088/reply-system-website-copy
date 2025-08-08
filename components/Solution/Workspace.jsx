import React from 'react'
import Image from 'next/image'

export default function Workspace() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            TICKETING SOFTWARE MADE SIMPLE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            A workspace for every support need
          </h1>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Column 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-lightest rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Deliver fast service</h3>
            <p className="text-gray-600 leading-relaxed">
              Make it easy for customers and employees to access support on any channel, and tailor every interaction with detailed profiles that capture preferences and past conversations.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-lightest rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Boost agent productivity</h3>
            <p className="text-gray-600 leading-relaxed">
              Help agents focus on what matters with a unified view for context, collaboration, and insights, allowing them to resolve tickets faster with automations and built-in AI.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-lightest rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Simplify ticket workflows</h3>
            <p className="text-gray-600 leading-relaxed">
              Scale your business with easy-to-setup, no-code tools and integrations that simplify and customize your workflows-saving your team countless hours of work.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              GET STARTED FAST, NO EXPERTISE REQUIRED.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Excellent support starts with the right ticketing system.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Zendesk's ticketing system is easy to use, quick to set up, and designed to deliver value fast. According to Forrester, companies that switched to Zendesk achieved an average ROI of 301% over three years. With ready-to-go tools and built-in best practices, teams like Rain were fully up and running in just hours, not weeks.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              14-day free trial
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/workspace.webp"
                alt="Man and boy using ticketing system"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
