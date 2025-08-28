import React, { useState } from 'react'
import { MapPin, MessageCircle, Mail, Users, X, Plus } from 'lucide-react'

const contact = () => {
    const [openFaq, setOpenFaq] = useState(0)

    const contactCards = [
        {
            id: 1,
            icon: MapPin,
            title: "Our office",
            description: "Don Valley, Toronto",
            buttonText: "Visit us →"
        },
        {
            id: 2,
            icon: MessageCircle,
            title: "Via chat",
            description: "Get instant answers.",
            buttonText: "Let's chat →"
        },
        {
            id: 3,
            icon: Mail,
            title: "Report Issue",
            description: "Get priority support.",
            buttonText: "Send report →"
        },
        {
            id: 4,
            icon: Users,
            title: "Our community",
            description: "Connect with users.",
            buttonText: "Join us now →"
        }
    ]

    const faqData = [
        {
            id: 0,
            question: "Do I need to know about how to code?",
            answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
        },
        {
            id: 1,
            question: "Can I use it for commercial projects?",
            answer: "Yes, you can use our platform for commercial projects. We offer various licensing options to suit your business needs."
        },
        {
            id: 2,
            question: "Can I use it for multiple projects?",
            answer: "Absolutely! Our platform is designed to support multiple projects. You can create and manage as many projects as you need."
        },
        {
            id: 3,
            question: "Can I use this to create and sell a product?",
            answer: "Yes, you can use our tools to create products for sale. We provide the infrastructure and support you need to bring your ideas to market."
        },
        {
            id: 4,
            question: "What is your refund policy?",
            answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 30 days of your purchase."
        }
    ]

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id)
    }

    return (
        <div className='bg-white min-h-screen'>
            <div className='bg-gradient-to-br to-primary/20 via-white from-white min-h-[60vh]'>
                <div className='max-w-7xl mx-auto flex flex-col justify-between items-center gap-28'>
                    <div className='flex flex-col gap-4 mt-32 py-20'>
                        <h2 className='text-4xl  lg:text-5xl font-bold text-center'>Contact Us</h2>
                        <p className=' text-center max-w-2xl text-secondary'>We're here to help you with any questions or concerns you may have. Please fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto flex flex-col justify-between items-center gap-28 mt-20'>
                <div className='w-full h-full min-h-[500px] mt-[-200px]'>
                    <div className='bg-white shadow-lg flex flex-col gap-10 max-w-5xl mx-auto p-16 border-2 border-gray-200 rounded-lg'>
                        <p className='text-center max-w-2xl mx-auto text-secondary/60'>have a question or feedback?Fill out the form below and we'll get back to you as soon as possible.</p>
                        <div className='flex gap-10'>
                            <input type='text' placeholder='Full Name' className='border border-gray-200 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500' />
                            <input type='text' placeholder='Company Name' className='border border-gray-200 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500' />
                        </div>
                        <select name="challanges" id="challanges" className='border border-gray-200 p-3 rounded-sm w-full outline-none focus:outline-none focus:ring-2 focus:ring-green-500'>
                            <option value="challanges">Challanges1</option>
                            <option value="challanges">Challanges2</option>
                        </select>
                        <input type="text container" placeholder="message" className='border border-gray-200 p-3 rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500' />
                        <div className='flex justify-center'>
                            <button className="bg-primary text-secondary font-semibold px-16 py-3 rounded-sm hover:bg-primary-hover transition-colors">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other ways to reach us section */}
            <div className='max-w-7xl mx-auto px-4 py-20'>
                <h2 className='text-4xl lg:text-5xl font-bold text-center text-black mb-16'>Other ways to reach us</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {contactCards.map((card) => {
                        const IconComponent = card.icon
                        return (
                            <div key={card.id} className='bg-primary-alt rounded-lg p-6 group hover:scale-105 transition-all duration-600 flex items-center justify-between hover:shadow-lg'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-white rounded-lg p-6'>
                                        <IconComponent className='w-6 h-6 text-secondary' />
                                    </div>
                                    <div>
                                        <h3 className='font-bold text-black text-lg'>{card.title}</h3>
                                        <p className='text-black/70'>{card.description}</p>
                                    </div>
                                </div>
                                <button className='text-secondary font-medium text-sm group-hover:translate-x-1 transition-all duration-300'>
                                    {card.buttonText}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* FAQ Section */}
            <div className='max-w-7xl mx-auto px-4 py-20'>
                <h2 className='text-4xl lg:text-5xl font-bold text-center text-black mb-16'>Frequently asked questions:</h2>

                <div className='bg-gray-100 rounded-lg p-8 shadow-lg min-h-[600px] max-w-5xl mx-auto'>
                    {faqData.map((faq) => (
                        <div key={faq.id} className='border-b border-gray-200 last:border-b-0 overflow-hidden'>
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className='w-full flex items-center justify-between py-6 text-left transition-all duration-300 ease-in-out group'
                            >
                                <h3 className={`text-lg transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'font-bold text-secondary' : 'font-normal text-black group-hover:text-secondary'}`}>
                                    {faq.question}
                                </h3>
                                <div className='ml-4 flex-shrink-0'>
                                    <div className={`transition-all duration-300 ease-in-out transform ${openFaq === faq.id ? 'rotate-45' : 'rotate-0'}`}>
                                        <Plus className={`w-5 h-5 transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'text-secondary' : 'text-black group-hover:text-secondary'}`} />
                                    </div>
                                </div>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className='pb-6 transform transition-transform duration-500 ease-in-out'>
                                    <p className='text-black/80 leading-relaxed'>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default contact