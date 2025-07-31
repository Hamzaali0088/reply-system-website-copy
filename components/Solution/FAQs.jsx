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
    <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", padding: "60px 20px", gap: "60px" }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ 
          fontSize: "3rem", 
          fontWeight: 700, 
          marginBottom: 0,
          lineHeight: "1.2",
          color: "#1a1a1a"
        }}>
          Frequently asked<br />questions
        </h1>
      </div>
      <div style={{ flex: 2 }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ borderBottom: "1px solid #e5e5e5" }}>
            <button
              onClick={() => handleToggle(idx)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "24px 0",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
                color: "#1a1a1a",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#007bff"}
              onMouseLeave={(e) => e.target.style.color = "#1a1a1a"}
            >
              {faq.question}
              <span style={{ 
                float: "right", 
                fontSize: "0.9rem",
                transition: "transform 0.2s ease"
              }}>
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === idx && (
              <div style={{ 
                padding: "0 0 24px 0", 
                color: "#666", 
                fontSize: "1rem",
                lineHeight: "1.6",
                animation: "fadeIn 0.3s ease"
              }}>
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
