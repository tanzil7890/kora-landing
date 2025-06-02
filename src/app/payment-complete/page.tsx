'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function PaymentComplete() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with payment confirmation */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
              <svg 
                className="w-10 h-10 text-green-500" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Thank You for Your <span className="text-[#8B5CF6] font-medium">Purchase!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your payment has been successfully processed. You&apos;ll receive a confirmation email shortly with all the details.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                href="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors"
              >
                Access Dashboard
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next steps section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
              Your Next Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Access Your Dashboard</h3>
                <p className="text-gray-600">
                  Log in to your personalized dashboard to get started with setting up your AI search experience.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Onboarding Call</h3>
                <p className="text-gray-600">
                  Schedule your onboarding call with our team to ensure you get the most out of your plan.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Go Live</h3>
                <p className="text-gray-600">
                  Implement the search solution on your website and start delivering exceptional search experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 