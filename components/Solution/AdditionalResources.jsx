"use client"
import React from 'react'
import { Play, FileText, BookOpen, MessageSquare, Settings } from 'lucide-react'
import Image from 'next/image'

export default function AdditionalResources() {
  const data = [
    {
      icon: Play,
      label: "VIDEO",
      title: "Getting started video guide",
      description: "Learn the basics of our platform with our comprehensive video tutorial.",
      img: "/img/ar1.webp"
    },
    {
      icon: FileText,
      label: "DATASHEET",
      title: "Complete CS Solution datasheet",
      description: "Detailed technical specifications and features of our customer service solution.",
      img: "/img/ar2.webp"
    },
    {
      icon: BookOpen,
      label: "GUIDE",
      title: "Unlock the power of AI for customer experience",
      description: "Discover how AI can transform your customer service operations and improve satisfaction.",
      img: "/img/ar3.webp"
    },
    {
      icon: FileText,
      label: "ARTICLE",
      title: "Increasing efficiency with Agent Workspace",
      description: "Learn how our Agent Workspace can streamline your team's workflow and boost productivity.",
      img: "/img/ar4.webp"
    },
    {
      icon: BookOpen,
      label: "GUIDE",
      title: "The guide to customizing your customer service software",
      description: "Step-by-step instructions for tailoring our platform to your specific business needs.",
      img: "/img/ar5.webp"
    },
  ]

  return (
    <section className="py-16 bg-bg-light">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Additional Resources
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our comprehensive collection of resources to help you get the most out of our platform.
          </p>
        </div>

        <div className="flex  overflow-x-scroll h-full" style={{ scrollbarWidth: 'none' }}>
          {data.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-bg-light min-w-[25%] h-full rounded-lg  overflow-hidden  transition-shadow duration-300">
                <div className='px-5 h-full'>
                  <div className="relative h-48 rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                    </div>
                  </div>
                  <div className="p-6 bg-bg-lighter h-full min-h-[150px] rounded-b-2xl">
                    <div className='flex items-center gap-2 mb-2'>
                      <IconComponent className="w-4 h-4 text-text-secondary" />
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
