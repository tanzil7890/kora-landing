'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function StarterPlanPayment() {
  // Add Stripe script on component mount
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="js.stripe.com/v3/buy-button.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with payment options */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-8">
            <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Brain circuit background */}
                <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 3"
                >
                  <animate attributeName="strokeDashoffset" values="12;0" dur="3s" repeatCount="indefinite"/>
                </path>

                {/* Neural network nodes */}
                <circle cx="16" cy="12" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="12" cy="18" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle cx="20" cy="18" r="2" fill="url(#gradient)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="1s"/>
                </circle>

                {/* Neural connections */}
                <path d="M16 12L12 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M16 12L20 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </path>
                <path d="M12 18L20 18" stroke="url(#gradient)" strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" begin="1s"/>
                </path>

                {/* Pulse effect */}
                <circle cx="16" cy="16" r="6" stroke="url(#gradient)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>

                {/* Define gradient */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#000000'}} />
                    <stop offset="100%" style={{stopColor: '#333333'}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Outhad <span className="text-[#8B5CF6] font-medium">Starter Plan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Perfect for small businesses starting with AI-powered search
            </p>
          </motion.div>

          {/* Plan details and Stripe Buy Button */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-gray-900">Starter Plan</h2>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  $149<span className="text-lg">+</span>
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  Billed monthly. All prices in USD.
                </p>
                <div className="h-px bg-gray-100"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  What&apos;s included:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Context-aware search</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Basic personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Up to 1,000 searches/month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Up to 5,000 SKUs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">2 team members</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Payment section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Complete Your Purchase</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to the Starter Plan to begin transforming your search experience with AI-powered solutions.
              </p>
              
              {/* Stripe Buy Button */}
              <div className="mb-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <stripe-buy-button
                        buy-button-id="${process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID}"
                        publishable-key="${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}"
                      >
                      </stripe-buy-button>
                    `
                  }}
                />
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Need more information?</h3>
                <div className="flex gap-4">
                  <Link 
                    href="/#pricing"
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    View all plans
                  </Link>
                  <Link 
                    href="/"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg text-sm font-medium hover:from-black hover:to-gray-900 transition-colors"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Outhad section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">
                Why Choose Outhad Starter Plan
              </h2>
              <p className="text-xl text-gray-600">
                Powerful AI search capabilities designed specifically for small businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Quick Setup</h3>
                <p className="text-gray-600">
                  Get up and running in just a few hours with our seamless onboarding process
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Measurable Results</h3>
                <p className="text-gray-600">
                  Track performance and ROI with our intuitive analytics dashboard
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Growth Path</h3>
                <p className="text-gray-600">
                  Easily upgrade as your business expands with our flexible scaling options
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-2">How soon can I get started?</h3>
                <p className="text-gray-600">
                  After your payment is processed, you&apos;ll get immediate access to your dashboard. Our team will contact you within 24 hours to begin your setup process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Can I upgrade to a higher plan later?</h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade to our Growth or Scale plan at any time as your business needs evolve.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-2">What happens if I exceed my monthly search limit?</h3>
                <p className="text-gray-600">
                  If you approach your search limit, we&apos;ll notify you in advance. You can then choose to upgrade your plan or add additional search capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 