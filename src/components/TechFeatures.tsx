'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalizedShoppingAgent } from './PersonalizedShoppingAgent';
import { InsightsDashboard } from './InsightsDashboard';

interface ProductDetails {
  material: string;
  features: string[];
  care: string;
  dimensions?: string;
  warranty?: string;
}

interface MatchReason {
  primary: string;
  contextual: string;
  userIntent: string;
  score: number;
}

interface ProductResult {
  id: number;
  name: string;
  category: string;
  price: string;
  relevance: number;
  image: string;
  details?: ProductDetails;
  tags?: string[];
  matchReason?: MatchReason;
}

const features = [
  {
    id: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Context-Aware Search',
    description: 'Understand user intent and deliver more relevant results with our advanced AI algorithms.',
    searchDemo: {
      queries: [
        {
          text: "summer dresses",
          context: "Casual summer fashion",
          intent: "Lightweight, breathable dresses for warm weather",
          results: [
            { 
              id: 1, 
              name: "Floral Maxi Dress", 
              category: "Dresses", 
              price: "$89.99", 
              relevance: 98, 
              image: "/products/dress1.jpg",
              details: {
                material: "95% Cotton, 5% Elastane for optimal comfort and breathability",
                features: [
                  "Adjustable shoulder straps",
                  "Hidden side pockets",
                  "Elastic waistband",
                  "Lined bodice",
                  "Flowy maxi length"
                ],
                care: "Machine wash cold, gentle cycle. Tumble dry low.",
                dimensions: "Length: 52 inches (Size M)"
              },
              tags: ["breathable", "floral-print", "maxi-length", "pockets", "summer-essential"],
              matchReason: {
                primary: "Perfect summer dress with breathable fabric",
                contextual: "Ideal for warm weather with lightweight cotton blend construction",
                userIntent: "Matches search for lightweight summer wear with breathable fabric and casual styling",
                score: 98
              }
            },
            { 
              id: 2, 
              name: "Beach Sundress", 
              category: "Summer Collection", 
              price: "$65.00", 
              relevance: 96, 
              image: "/products/dress2.jpg",
              details: "Quick-dry material, UV protection, convertible design",
              tags: ["beach-ready", "quick-dry", "UV-protective", "versatile"],
              matchReason: "Ideal for beach activities with UV protection"
            },
            { 
              id: 3, 
              name: "Light Cotton Dress", 
              category: "Casual Wear", 
              price: "$49.99", 
              relevance: 94, 
              image: "/products/dress3.jpg",
              details: "100% organic cotton, button-front, adjustable waist",
              tags: ["organic", "casual", "sustainable", "everyday-wear"],
              matchReason: "Breathable cotton perfect for summer comfort"
            },
            { 
              id: 25, 
              name: "Boho Print Wrap Dress", 
              category: "Bohemian", 
              price: "$79.99", 
              relevance: 92, 
              image: "/products/dress4.jpg",
              details: "Adjustable wrap style, flutter sleeves, high-low hem",
              tags: ["bohemian", "wrap-style", "flowy", "pattern-mix"],
              matchReason: "Loose-fitting design ideal for summer comfort"
            },
            { 
              id: 26, 
              name: "Linen Shirt Dress", 
              category: "Resort Wear", 
              price: "$69.99", 
              relevance: 90, 
              image: "/products/dress5.jpg",
              details: "Premium linen blend, roll-up sleeves, belt included",
              tags: ["breathable", "versatile", "linen-blend", "classic"],
              matchReason: "Natural linen fabric perfect for warm weather"
            }
          ]
        },
        {
          text: "workout gear",
          context: "Athletic performance wear",
          intent: "High-performance activewear for intense workouts",
          results: [
            { 
              id: 4, 
              name: "Performance Leggings", 
              category: "Activewear", 
              price: "$75.00", 
              relevance: 98, 
              image: "/products/leggings.jpg",
              details: "Compression fit, sweat-wicking, hidden pocket",
              tags: ["compression", "moisture-wicking", "4-way-stretch", "squat-proof"],
              matchReason: "High-performance features for intense workouts"
            },
            { id: 5, name: "Moisture-Wicking Top", category: "Sports", price: "$45.00", relevance: 94, image: "/products/top.jpg" },
            { id: 6, name: "Training Shoes", category: "Footwear", price: "$129.99", relevance: 91, image: "/products/shoes.jpg" },
            { id: 27, name: "Compression Shorts", category: "Performance Wear", price: "$45.99", relevance: 93, image: "/products/shorts.jpg", tags: ["compression", "quick-dry"] },
            { id: 28, name: "Sports Bra Pro", category: "Support Wear", price: "$49.99", relevance: 90, image: "/products/bra.jpg", tags: ["high-impact", "moisture-wicking"] }
          ]
        },
        {
          text: "office attire",
          context: "Professional workwear",
          intent: "Polished, comfortable clothing for business environment",
          results: [
            { 
              id: 7, 
              name: "Tailored Blazer", 
              category: "Workwear", 
              price: "$149.99", 
              relevance: 98, 
              image: "/products/blazer.jpg",
              details: "Italian wool blend, structured shoulders, lined",
              tags: ["professional", "structured", "wrinkle-resistant", "classic-fit"],
              matchReason: "Professional cut and fabric for business settings"
            },
            { id: 8, name: "Professional Slacks", category: "Business", price: "$89.99", relevance: 93, image: "/products/slacks.jpg" },
            { id: 9, name: "Silk Blouse", category: "Formal", price: "$79.99", relevance: 90, image: "/products/blouse.jpg" },
            { id: 29, name: "Pencil Skirt", category: "Office Essentials", price: "$69.99", relevance: 94, image: "/products/skirt.jpg", tags: ["classic", "tailored"] },
            { id: 30, name: "Oxford Dress Shirt", category: "Business Casual", price: "$59.99", relevance: 92, image: "/products/oxford.jpg", tags: ["wrinkle-free", "cotton-blend"] }
          ]
        },
        {
          text: "winter accessories",
          context: "Cold weather essentials",
          results: [
            { id: 10, name: "Cashmere Scarf", category: "Accessories", price: "$79.99", relevance: 98, image: "/products/scarf.jpg" },
            { id: 11, name: "Leather Gloves", category: "Winter Wear", price: "$59.99", relevance: 95, image: "/products/gloves.jpg" },
            { id: 12, name: "Wool Beanie", category: "Headwear", price: "$34.99", relevance: 92, image: "/products/beanie.jpg" },
            { id: 31, name: "Thermal Neck Warmer", category: "Cold Weather", price: "$29.99", relevance: 94, image: "/products/neckwarmer.jpg", tags: ["fleece-lined", "moisture-wicking"] },
            { id: 32, name: "Ear Muffs Deluxe", category: "Winter Protection", price: "$24.99", relevance: 91, image: "/products/earmuffs.jpg", tags: ["adjustable", "plush-lined"] }
          ]
        },
        {
          text: "sustainable fashion",
          context: "Eco-friendly clothing",
          intent: "Environmentally conscious fashion choices",
          results: [
            { 
              id: 13, 
              name: "Organic Cotton Tee", 
              category: "Sustainable", 
              price: "$39.99", 
              relevance: 98, 
              image: "/products/tee.jpg",
              details: "GOTS certified organic cotton, low-impact dyes",
              tags: ["organic", "eco-friendly", "certified", "plastic-free-packaging"],
              matchReason: "100% sustainable materials and ethical production"
            },
            { id: 14, name: "Recycled Denim", category: "Eco-Friendly", price: "$99.99", relevance: 94, image: "/products/denim.jpg" },
            { id: 15, name: "Bamboo Sweater", category: "Green Fashion", price: "$85.00", relevance: 91, image: "/products/sweater.jpg" },
            { id: 33, name: "Hemp Cargo Pants", category: "Sustainable Basics", price: "$79.99", relevance: 93, image: "/products/hemp.jpg", tags: ["biodegradable", "durable"] },
            { id: 34, name: "Upcycled Jacket", category: "Eco Collection", price: "$129.99", relevance: 90, image: "/products/upcycled.jpg", tags: ["recycled-materials", "limited-edition"] }
          ]
        },
        {
          text: "smart gadgets",
          context: "Tech accessories",
          intent: "Advanced wearable technology for daily use",
          results: [
            { 
              id: 16, 
              name: "Smart Watch Pro", 
              category: "Wearables", 
              price: "$299.99", 
              relevance: 98, 
              image: "/products/watch.jpg",
              details: "Always-on display, ECG monitoring, 5-day battery",
              tags: ["health-tracking", "notifications", "water-resistant", "GPS"],
              matchReason: "Comprehensive health and fitness tracking features"
            },
            { id: 17, name: "Wireless Earbuds", category: "Audio", price: "$159.99", relevance: 95, image: "/products/earbuds.jpg", tags: ["noise-canceling", "waterproof"] },
            { id: 18, name: "Fitness Tracker", category: "Health", price: "$89.99", relevance: 92, image: "/products/tracker.jpg", tags: ["heart-rate", "sleep"] },
            { id: 35, name: "Smart Ring", category: "Wellness Tech", price: "$199.99", relevance: 94, image: "/products/ring.jpg", tags: ["sleep-tracking", "payment-enabled"] },
            { id: 36, name: "AR Glasses", category: "Smart Eyewear", price: "$399.99", relevance: 91, image: "/products/glasses.jpg", tags: ["augmented-reality", "voice-control"] }
          ]
        },
        {
          text: "home decor",
          context: "Interior design",
          results: [
            { id: 19, name: "Modern Wall Art", category: "Decor", price: "$199.99", relevance: 97, image: "/products/art.jpg", tags: ["abstract", "canvas"] },
            { id: 20, name: "Smart LED Lights", category: "Lighting", price: "$79.99", relevance: 94, image: "/products/lights.jpg", tags: ["rgb", "voice-control"] },
            { id: 21, name: "Ceramic Vase Set", category: "Accessories", price: "$129.99", relevance: 91, image: "/products/vase.jpg", tags: ["handmade", "modern"] },
            { id: 37, name: "Digital Photo Frame", category: "Smart Decor", price: "$149.99", relevance: 93, image: "/products/frame.jpg", tags: ["wifi-enabled", "motion-sensor"] },
            { id: 38, name: "Floating Shelves", category: "Wall Decor", price: "$89.99", relevance: 90, image: "/products/shelves.jpg", tags: ["minimalist", "easy-install"] }
          ]
        },
        {
          text: "beauty essentials",
          context: "Skincare and makeup",
          results: [
            { id: 22, name: "Vitamin C Serum", category: "Skincare", price: "$45.99", relevance: 98, image: "/products/serum.jpg", tags: ["anti-aging", "brightening"] },
            { id: 23, name: "Makeup Brush Set", category: "Beauty Tools", price: "$89.99", relevance: 95, image: "/products/brushes.jpg", tags: ["professional", "vegan"] },
            { id: 24, name: "Natural Face Mask", category: "Face Care", price: "$29.99", relevance: 92, image: "/products/mask.jpg", tags: ["organic", "hydrating"] },
            { id: 39, name: "LED Face Massager", category: "Beauty Tech", price: "$129.99", relevance: 94, image: "/products/massager.jpg", tags: ["anti-aging", "rechargeable"] },
            { id: 40, name: "Collagen Peptides", category: "Supplements", price: "$49.99", relevance: 91, image: "/products/collagen.jpg", tags: ["skin-health", "marine-sourced"] }
          ]
        }
      ],
      currentQueryIndex: 0,
      filters: ["All", "Popular", "New Arrivals", "Sale", "Highly Relevant"],
      searchMetrics: {
        accuracy: "98%",
        responseTime: "0.12 seconds",
        contextScore: "95%",
        intentMatch: "High"
      }
    },
    caseStudy: {
      title: 'Case Study: Predictive Analytics for E-commerce Platform',
      description: 'Implementing advanced data collection and analysis for personalized shopping experiences.',
      stats: [
        { label: 'Running', value: '5', icon: '🔄' },
        { label: 'Completed', value: '28', icon: '✓' },
        { label: 'Failed', value: '2', icon: '✕' }
      ],
      collaborators: 4,
      timeAgo: 'Updated 3 days ago'
    }
  },
  {
    id: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Personalized Shopping Agents',
    description: 'AI-powered assistants that learn from user behavior to provide tailored recommendations.',
    caseStudy: {
      title: 'Case Study: Real-time Performance Monitoring System',
      description: 'Implementing automated deployment and real-time monitoring for a financial services platform.',
      stats: [
        { label: 'Running', value: '2', icon: '🔄' },
        { label: 'Completed', value: '32', icon: '✓' },
        { label: 'Failed', value: '0', icon: '✕' }
      ],
      collaborators: 3,
      timeAgo: 'Created 2 weeks ago'
    }
  },
  {
    id: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
        <path d="M8 6H16M8 12H16M8 18H12M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Insights and Reporting',
    description: 'Receive in-depth analytics and reports to track performance and gain visibility into all AI-driven processes.',
    caseStudy: {
      title: 'Case Study: Advanced Analytics Platform',
      description: 'Implementing real-time analytics and reporting for e-commerce optimization.',
      stats: [
        { label: 'Running', value: '8', icon: '🔄' },
        { label: 'Completed', value: '42', icon: '✓' },
        { label: 'Failed', value: '1', icon: '✕' }
      ],
      collaborators: 6,
      timeAgo: 'Updated 1 day ago'
    }
  }
];

const ProductImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {(isLoading || imageError) && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-100 via-[#8B5CF6]/5 to-gray-100"
          initial={false}
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-[#8B5CF6]/40"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {!imageError && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
};

export function TechFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [searchQueryIndex, setSearchQueryIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  const [searchTime, setSearchTime] = useState("0.12");
  const [isLoadingTime, setIsLoadingTime] = useState(false);

  // Auto-play functionality for features
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Modified timing for search query rotation
  useEffect(() => {
    if (activeFeature !== 0 || !features[0]?.searchDemo?.queries) return;
    
    const interval = setInterval(() => {
      setIsSearching(true);
      setIsLoadingTime(true);
      
      // Generate a random search time between 0.08 and 0.24 seconds
      const newTime = (Math.random() * (0.24 - 0.08) + 0.08).toFixed(2);
      
      setTimeout(() => {
        setSearchTime(newTime);
        setSearchQueryIndex((prev) => (prev + 1) % (features[0]?.searchDemo?.queries?.length || 1));
        setIsSearching(false);
        setIsLoadingTime(false);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeFeature]);

  const handleFeatureClick = (index: number) => {
    setAutoPlay(false);
    setIsClicking(true);
    setActiveFeature(index);
    setTimeout(() => setIsClicking(false), 200);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Progress bar for auto-play */}
      {autoPlay && (
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-[#8B5CF6]/20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Features */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-light leading-tight">
                Discover what&apos;s possible <br className="hidden sm:block" />with <span className="text-[#8B5CF6] font-medium">outhad ai</span>
              </h2>
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  autoPlay ? 'bg-[#8B5CF6]/10 text-[#8B5CF6]' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {autoPlay ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`flex gap-4 sm:gap-8 cursor-pointer group relative rounded-xl p-4 hover:bg-gray-50 transition-colors duration-200 ${
                    index === activeFeature ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Progress indicator */}
                  {index === activeFeature && (
                    <motion.div
                      layoutId="activeFeature"
                      className="absolute inset-0 border-2 border-[#8B5CF6]/20 rounded-xl overflow-hidden"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      {autoPlay && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-[#8B5CF6]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col items-center relative">
                    <motion.div
                      className={`w-12 h-12 rounded-full border-2 ${
                        index === activeFeature 
                          ? 'border-[#8B5CF6] bg-[#8B5CF6]/5' 
                          : 'border-gray-200 group-hover:border-[#8B5CF6]/40'
                        } flex items-center justify-center transition-all duration-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={index === activeFeature && isClicking ? { scale: 0.9 } : { scale: 1 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    {index !== features.length - 1 && (
                      <div className={`w-0.5 h-full mt-4 ${
                        index === activeFeature 
                          ? 'bg-[#8B5CF6]' 
                          : 'bg-gray-200 group-hover:bg-[#8B5CF6]/40'
                        } transition-colors duration-200`} 
                      />
                    )}
                  </div>

                  <div className="relative flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.span
                        animate={index === activeFeature ? { 
                          color: '#8B5CF6',
                          scale: 1.05
                        } : { 
                          color: '#9CA3AF',
                          scale: 1
                        }}
                        className="text-xl font-medium"
                      >
                        {feature.id}
                      </motion.span>
                      <h3 className={`text-xl font-medium ${
                        index === activeFeature 
                          ? 'text-gray-900' 
                          : 'text-gray-600 group-hover:text-gray-900'
                        } transition-colors duration-200`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Interactive arrow */}
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: index === activeFeature ? 0 : 10 }}
                      whileHover={{ x: 10 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={index === activeFeature ? '#8B5CF6' : '#9CA3AF'} strokeWidth="2">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 gap-2 lg:hidden">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === activeFeature ? 'bg-[#8B5CF6]' : 'bg-gray-200 hover:bg-[#8B5CF6]/40'
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Right side - Content Display */}
          <div className="flex-1 min-h-[600px] lg:min-h-0">
            <AnimatePresence mode="wait">
              {activeFeature === 0 ? (
                // Search Demo Display
                <motion.div
                  key="search-demo"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-gray-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 relative overflow-hidden h-[800px]"
                >
                  {/* Enhanced Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #8B5CF6 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '24px 24px'],
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Filter Tabs */}
                  <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {features[0]?.searchDemo?.filters?.map((filter) => (
                      <motion.button
                        key={filter}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                          activeFilter === filter 
                            ? 'bg-[#8B5CF6] text-white' 
                            : 'bg-white text-gray-600 hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]'
                        }`}
                        onClick={() => setActiveFilter(filter)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {filter}
                      </motion.button>
                    ))}
                  </div>

                  {/* Search Bar Section - existing code with enhanced animations */}
                  <motion.div 
                    className="relative mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative flex items-center">
                      <motion.div
                        className="absolute left-5 text-[#8B5CF6] pointer-events-none"
                        animate={{ 
                          scale: isSearching ? 1.2 : 1, 
                          rotate: isSearching ? 360 : 0,
                          opacity: isSearching ? 1 : 0.6
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21L16.65 16.65" />
                        </svg>
                      </motion.div>

                      <input
                        type="text"
                        value={features[0]?.searchDemo?.queries?.[searchQueryIndex]?.text || ""}
                        readOnly
                        className="w-full h-12 pl-12 pr-36 rounded-xl bg-white border border-gray-200 text-gray-900 text-base focus:ring-2 focus:ring-[#8B5CF6]/20 focus:border-[#8B5CF6] shadow-sm"
                      />

                      {/* Context Badge */}
                      <motion.div
                        className="absolute right-3 bg-[#8B5CF6]/10 text-[#8B5CF6] px-4 py-1.5 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                      >
                        {features[0]?.searchDemo?.queries?.[searchQueryIndex]?.context}
                      </motion.div>
                    </div>

                    {/* Trending Searches */}
                    <motion.div
                      className="absolute -bottom-20 left-0 right-0 bg-white rounded-xl shadow-lg border border-gray-100 p-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: showTrending ? 1 : 0,
                        y: showTrending ? 0 : -10,
                        pointerEvents: showTrending ? "auto" : "none"
                      }}
                    >
                      <div className="text-sm font-medium text-gray-500 mb-2">Trending Searches</div>
                      <div className="flex flex-wrap gap-2">
                        {features[0]?.searchDemo?.queries?.map((query, index) => (
                          <motion.button
                            key={query.text}
                            className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              setSearchQueryIndex(index);
                              setShowTrending(false);
                            }}
                          >
                            {query.text}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Search Results */}
                  <div className="space-y-4">
                    {(features[0]?.searchDemo?.queries?.[searchQueryIndex]?.results as ProductResult[])?.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-md transition-all duration-200 cursor-pointer ${
                          expandedResult === result.id ? 'ring-2 ring-[#8B5CF6]' : ''
                        }`}
                      >
                        <div 
                          className="flex items-center gap-4"
                          onClick={() => setExpandedResult(expandedResult === result.id ? null : result.id)}
                        >
                          {/* Product Image with Loading Animation */}
                          <div className="w-16 h-16 rounded-lg overflow-hidden relative group">
                            <ProductImage
                              src={result.image}
                              alt={result.name}
                              className="w-full h-full"
                            />

                            {/* Hover Overlay */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={false}
                              animate={expandedResult === result.id ? { opacity: 1 } : { opacity: 0 }}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">{result.name}</h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-500">{result.category}</span>
                                  <span className="text-sm font-medium text-[#8B5CF6]">{result.price}</span>
                                </div>
                              </div>
                              <motion.div 
                                className="text-sm font-medium flex items-center gap-2"
                                initial={{ scale: 0.5 }}
                                animate={{ 
                                  scale: 1,
                                  color: expandedResult === result.id ? '#8B5CF6' : '#6B7280'
                                }}
                                transition={{ type: "spring", bounce: 0.5, delay: 0.4 + index * 0.1 }}
                              >
                                <span>{result.relevance}% match</span>
                                <motion.svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  animate={{ rotate: expandedResult === result.id ? 180 : 0 }}
                                >
                                  <path d="M19 9l-7 7-7-7" />
                                </motion.svg>
                              </motion.div>
                            </div>
                            
                            {/* Enhanced Relevance Bar */}
                            <motion.div 
                              className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                              <motion.div 
                                className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]"
                                initial={{ width: 0 }}
                                animate={{ width: `${result.relevance}%` }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedResult === result.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 border-t border-gray-100 pt-4"
                            >
                              {/* Product Details */}
                              {result.details?.features && (
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <h5 className="text-sm font-medium text-gray-900 mb-2">Product Details</h5>
                                    <ul className="space-y-1">
                                      {result.details.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                          <svg className="w-4 h-4 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-medium text-gray-900 mb-2">Match Details</h5>
                                    <div className="space-y-2">
                                      <div className="text-sm">
                                        <span className="text-[#8B5CF6] font-medium">
                                          {result.matchReason?.score || result.relevance}% Match Score
                                        </span>
                                      </div>
                                      <p className="text-sm text-gray-600">{result.matchReason?.contextual || "Matches search criteria"}</p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Material & Care */}
                              <div className="mb-4">
                                <h5 className="text-sm font-medium text-gray-900 mb-2">Material & Care</h5>
                                <p className="text-sm text-gray-600">{result.details?.material}</p>
                                <p className="text-sm text-gray-600 mt-1">{result.details?.care}</p>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2">
                                {result.tags?.map((tag: string) => (
                                  <motion.span
                                    key={tag}
                                    className="px-2 py-1 rounded-full bg-[#8B5CF6]/5 text-[#8B5CF6] text-xs font-medium"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {tag}
                                  </motion.span>
                                ))}
                              </div>

                              {/* User Intent Match */}
                              <div className="mt-4 bg-[#8B5CF6]/5 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <svg className="w-4 h-4 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                  </svg>
                                  <span className="text-sm font-medium text-gray-900">Intent Match</span>
                                </div>
                                <p className="text-sm text-gray-600">{result.matchReason?.userIntent}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Search Stats with Filters */}
                  <motion.div
                    className="mt-6 flex items-center justify-between text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#8B5CF6] font-medium">
                        {features[0]?.searchDemo?.queries?.[searchQueryIndex]?.results?.length} results
                      </span>
                      <span className="text-gray-400">•</span>
                      <motion.div 
                        className="flex items-center"
                        animate={{ 
                          scale: isLoadingTime ? [1, 1.1, 1] : 1,
                          opacity: isLoadingTime ? [1, 0.7, 1] : 1
                        }}
                        transition={{ 
                          duration: 0.3,
                          repeat: isLoadingTime ? Infinity : 0
                        }}
                      >
                        <motion.span 
                          key={searchTime}
                          className="text-gray-500"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          {searchTime} seconds
                        </motion.span>
                      </motion.div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">Filter: {activeFilter}</span>
                    </div>
                    <button
                      onClick={() => setShowTrending(!showTrending)}
                      className="text-[#8B5CF6] hover:text-[#6D28D9] font-medium flex items-center gap-1"
                    >
                      <span>View Trending</span>
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ rotate: showTrending ? 180 : 0 }}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </motion.div>
                </motion.div>
              ) : activeFeature === 1 ? (
                // Personalized Shopping Agent
                <PersonalizedShoppingAgent />
              ) : activeFeature === 2 ? (
                // Insights Dashboards
                <motion.div
                  key="insights-dashboard"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-xl"
                  style={{ height: '800px', minHeight: '500px' }}
                >
                  <InsightsDashboard />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 