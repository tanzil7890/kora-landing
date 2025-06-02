'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses starting with AI.",
    price: "149+",
    features: [
      "Context-aware search",
      "Basic personalized recommendations",
      "Basic analytics dashboard",
      "Up to 1,000 searches/month",
      "Up to 5,000 SKUs",
      "Email support",
      "2 team members"
    ],
    buttonText: "Buy Now",
    buttonStyle: "bg-gradient-to-r from-gray-900 to-black text-white",
    isPopular: false,
    priceGradient: true,
    isDirectPurchase: true,
    buyButtonUrl: "/payment-starter-plan"
  },
  {
    name: "Growth", 
    description: "Ideal for growing online stores.",
    price: "499+",
    features: [
      "Advanced context-aware search",
      "Smart shopping agents",
      "Real-time analytics",
      "Up to 10,000 searches/month",
      "Up to 25,000 SKUs",
      "Priority support",
      "5 team members",
      "A/B testing",
      "Custom synonyms"
    ],
    buttonText: "Contact Sales",
    buttonStyle: "bg-white text-black",
    isPopular: true,
    badge: "Most popular",
    priceGradient: false
  },
  {
    name: "Scale",
    description: "For high-volume online retailers.",
    price: "999+", 
    features: [
      "Enterprise search capabilities",
      "Advanced AI shopping agents",
      "Advanced analytics & reporting",
      "Up to 50,000 searches/month",
      "Up to 100,000 SKUs",
      "24/7 Priority support",
      "15 team members",
      "Advanced A/B testing",
      "Custom AI training"
    ],
    buttonText: "Contact Sales",
    buttonStyle: "bg-gradient-to-r from-gray-900 to-black text-white",
    isPopular: false,
    priceGradient: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large enterprises.",
    price: "Get Quote",
    features: [
      "Fully customizable AI models",
      "Unlimited searches",
      "Unlimited SKUs",
      "Dedicated AI training",
      "Custom integrations",
      "24/7 Premium support",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom feature development"
    ],
    buttonText: "Contact sales",
    buttonStyle: "bg-gradient-to-r from-gray-900 to-black text-white",
    isPopular: false,
    priceGradient: true
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm text-[#6366F1] bg-[#6366F1]/5 rounded-full shadow-sm border border-[#6366F1]/10"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            PRICING
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
            Pricing on the basis of your<span className="block mt-2 text-[#8B5CF6] font-medium"> needs. </span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-gray-900 to-black text-white shadow-xl scale-105' 
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.553 18.895l4.56-4.56 4.56 4.56 4.56-4.56 4.56 4.56V13.19L16.233 8.63l-4.56 4.56-4.56-4.56L2.553 13.19v5.705zM3.553 13.19l4.56-4.56 4.56 4.56 4.56-4.56 4.56 4.56V7.485L16.233 2.925l-4.56 4.56-4.56-4.56L2.553 7.485V13.19z"/>
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-medium mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-4xl font-medium ${plan.priceGradient ? 'bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent' : ''}`}>$</span>
                  <span className={`text-6xl font-medium ${plan.priceGradient ? 'bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent' : ''}`}>{plan.price}</span>
                  <span className={`ml-2 text-lg ${plan.priceGradient ? 'bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent' : ''}`}>/mo</span>
                </div>
                {plan.isPopular && (
                  <div className="mt-2 text-sm text-white/80">
                    {plan.badge}
                  </div>
                )}
              </div>

              {!plan.isDirectPurchase ? (
                <a
                  href="https://cal.com/tanzilouthad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-xl font-medium transition-transform hover:scale-105 text-center ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </a>
              ) : (
                <Link
                  href={plan.buyButtonUrl}
                  className={`block w-full py-3 px-4 rounded-xl font-medium transition-transform hover:scale-105 text-center ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </Link>
              )}

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <svg 
                      className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-black'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${plan.isPopular ? 'text-white' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a target="_blank"
                  href="https://cal.com/tanzilouthad" 
                  className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-gray-500'} hover:underline`}
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}