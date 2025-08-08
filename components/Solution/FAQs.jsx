import React, { useState } from "react";

const faqs = [
  {
    question: "What is a ticketing system?",
    answer: "A ticketing system is a software solution that helps organizations manage, track, and resolve customer support requests efficiently. It creates unique tickets for each inquiry, ensuring no request falls through the cracks and providing a complete audit trail of all customer interactions."
  },
  {
    question: "What is Messaging? And can it act like live chat?",
    answer: "Messaging is a real-time communication feature that allows customers to connect with support teams instantly. Yes, it functions like live chat but with additional benefits - conversations are automatically converted to tickets, ensuring proper tracking and follow-up even after the initial chat session ends."
  },
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days with no credit card required. You can create unlimited tickets, test all integrations, and experience the full power of our platform. At the end of the trial, you can choose to upgrade to a paid plan or your account will be paused until you're ready to continue."
  },
  {
    question: "What resources are available to ensure I'm getting the most out of my platform?",
    answer: "We provide comprehensive resources including detailed documentation, video tutorials, webinars, and a dedicated customer success team. Our knowledge base contains best practices, integration guides, and troubleshooting tips. Plus, we offer personalized onboarding sessions to help you get started quickly."
  },
  {
    question: "Does this system integrate with other applications & systems?",
    answer: "Absolutely! We offer hundreds of pre-built integrations through our Marketplace, including popular tools like Slack, Salesforce, Shopify, and more. You can also build custom integrations using our robust API, webhooks, and developer tools to connect with any system your business uses."
  },
  {
    question: "How do you protect your customers' data?",
    answer: "We take data security seriously with enterprise-grade encryption, SOC 2 Type II compliance, and GDPR adherence. All data is encrypted in transit and at rest, we perform regular security audits, and offer features like SSO, two-factor authentication, and role-based access controls to keep your information safe."
  },
  {
    question: "What communication channels can I use to receive and respond to customer tickets?",
    answer: "Our platform supports multiple channels including email, web forms, phone, social media (Twitter, Facebook), live chat, and mobile apps. All conversations from different channels are unified into a single ticket, giving you a complete view of each customer's journey regardless of how they reach out."
  },
  {
    question: "How do macros work, and how can they help me save time managing tickets?",
    answer: "Macros are automated actions that can be applied to tickets with a single click. They can update ticket properties, send automated responses, assign tickets to specific agents, and more. For example, you can create a macro that automatically categorizes tickets, sends a confirmation email, and assigns them to the right team - saving minutes on each ticket."
  },
  {
    question: "Can I build and integrate a knowledge base to help customers find answers on their own?",
    answer: "Yes! Our knowledge base feature allows you to create comprehensive help articles, FAQs, and guides. Customers can search and find answers instantly, reducing ticket volume by up to 40%. The knowledge base integrates seamlessly with your ticketing system, and you can track which articles are most helpful to continuously improve your content."
  },
  {
    question: "Does your ticketing system use AI for automation?",
    answer: "Yes, our AI-powered features include intelligent ticket routing, automated categorization, sentiment analysis, and smart suggestions for responses. The AI learns from your team's patterns to continuously improve accuracy, helping you resolve tickets faster and provide better customer experiences."
  },
  {
    question: "What types of routing does your system offer, and who can use omnichannel routing?",
    answer: "We offer intelligent routing based on agent skills, workload, language, and ticket complexity. Omnichannel routing is available on all plans and automatically assigns tickets from any channel to the most qualified agent, ensuring customers get the right help quickly regardless of how they contact you."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex max-w-7xl mx-auto py-16 px-5 gap-16">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-0 leading-tight text-text-primary">
          Frequently asked<br />questions
        </h1>
      </div>
      <div className="flex-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-border">
            <button
              onClick={() => handleToggle(idx)}
              className="w-full text-left bg-transparent border-none py-6 text-lg font-semibold cursor-pointer outline-none text-text-primary hover:text-accent-blue transition-colors duration-200"
            >
              {faq.question}
              <span className="float-right text-sm transition-transform duration-200">
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="pb-6 text-gray-600 text-base leading-relaxed animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
