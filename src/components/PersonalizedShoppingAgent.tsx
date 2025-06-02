import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  products?: Product[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const teaProducts = [
  {
    id: '1',
    name: 'FUKAMUSHICHA',
    description: `Fukamushicha is a deep steamed tea with a dark green color, a sweet fragrance, and a full-bodied flavor. Imagine what happens when you over-boil your spinach; the leaves become extremely soft, breaking apart easily, and the water you boil them in is dyed green with the essence of the spinach leaves.

This is exactly what happens to tea leaves when you steam them for a long time. Perhaps the most popular tea in Japan today, fukamushicha is a variant of sencha in which the leaves are steamed for 60 seconds or longer.

As a result of the long steaming, the leaves become very soft, and break apart during rolling. The dry leaf is very powdery, and when steeped, the water is dyed a deep, opaque green with the leaf particles, so you are actually drinking much more of the leaf and its components – catechin, cholorophyll, theanine, vitamins, minerals.`,
    price: '$12.50 – $47.50',
    category: 'Green Teas',
    image: '/tea1.jpg'
  },
  {
    id: '2',
    name: 'CHINESE BLACK TEA BOX',
    description: 'A collection of Chinese black teas for those who prefer their tea black. These teas are popular for their unique flavors and high quality.',
    price: '$50.00',
    category: 'Black Teas',
    image: '/tea2.jpg'
  },
  {
    id: '3',
    name: 'SHOU MEI MINI WAFER WHITE TEA',
    description: `These little wafers are pressed from Shou Mei White Tea from Fuding in Fujian. Each wafer is roughly .15 ounce give or take 0.05 ounces and is just perfect for a 1 or 2 person tea session. We always use environmentally friendly packaging of our teas. We never use candy, sugar, or flavorings in our teas.

Suggested Steeping:
8 ounces of water
1 wafer
180°F
2-4 minutes`,
    price: '$11.50',
    category: 'White Tea',
    image: '/tea3.jpg'
  },
  {
    id: '4',
    name: 'NUWARA ELIYA BLACK TEA',
    description: 'This luxurious tea offers a sophisticated flavor, ideal for unwinding during your afternoon tea time.',
    price: '$9.50',
    category: 'Black Teas',
    image: '/tea4.jpg'
  },
  {
    id: '5',
    name: 'ORGANIC TAIWANESE OOLONG TEAS SET',
    description: 'A carefully curated selection of organic Taiwanese oolong teas known for their complex yet soothing flavors.',
    price: '$45.00',
    category: 'Oolong Teas',
    image: '/tea5.jpg'
  }
];

const relaxationTeas = [teaProducts[2], teaProducts[3], teaProducts[4]];

const predefinedConversation = [
  {
    id: '1',
    type: 'bot' as const,
    text: "Hello! I'm your personal shopping assistant. How can I help you today?"
  },
  {
    id: '2',
    type: 'user' as const,
    text: "What's your most popular tea?"
  },
  {
    id: '3',
    type: 'bot' as const,
    text: "Here are our most popular teas:\nFUKAMUSHICHA: Price: $12.50 - $47.50. It is a deep steamed tea with a dark green color, sweet fragrance, and full-bodied flavor.\n\nCHINESE BLACK TEA BOX: Price: $50.00. It is a collection of Chinese black teas with unique flavors and high quality.\n\nWould you like more details about these teas?",
    products: [teaProducts[0], teaProducts[1]]
  },
  {
    id: '4',
    type: 'user' as const,
    text: "Can you help me find a tea for relaxation?"
  },
  {
    id: '5',
    type: 'bot' as const,
    text: "For relaxation, I recommend these calming teas:\n\nSHOU MEI MINI WAFER WHITE TEA - $11.50. It is perfect for a calming tea session, these pressed white tea wafers provide gentle relaxation.\n\nNUWARA ELIYA BLACK TEA - $9.50. It is luxurious black tea with a sophisticated flavor for peaceful afternoon breaks.\n\nORGANIC TAIWANESE OOLONG SET - $45.0. It is a premium set with complex, soothing flavors.\n\nWould you like more details about any of these?",
    products: relaxationTeas
  },
  {
    id: '6',
    type: 'user' as const,
    text: "Which one would you recommend for evening use?"
  },
  {
    id: '7',
    type: 'bot' as const,
    text: "For evening use, I would highly recommend the SHOU MEI MINI WAFER WHITE TEA ($11.50). Here's why:\n\n• It's a white tea, which naturally contains less caffeine than black or oolong teas. • The gentle steeping process (2-4 minutes at 180°F) releases calming properties • The convenient mini wafer format is perfect for a relaxing evening ritual • Its mild, smooth flavor won't overwhelm your palate before bedtime\n\nWould you like to try this calming evening tea?",
    products: [teaProducts[2]]
  }
];

const sampleQueries = [
  "What's your most popular tea?",
  "Can you help me find a tea for relaxation?",
  "Do you have any green tea recommendations?",
  "Show me your premium tea collection",
  "What's on sale today?",
  "Looking for jasmine tea"
];

export function PersonalizedShoppingAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ 
          behavior: "smooth",
          block: "end"
        });
      }, 100); // Small delay to ensure content is rendered
    }
  };

  // Improved scroll effect when messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [messages, currentMessageIndex]);

  // Animate sample queries in input field
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQueryIndex((prev) => (prev + 1) % sampleQueries.length);
      setDisplayedQuery("");
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (displayedQuery.length < sampleQueries[currentQueryIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedQuery(sampleQueries[currentQueryIndex].slice(0, displayedQuery.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayedQuery, currentQueryIndex]);

  // Show messages with improved timing
  React.useEffect(() => {
    if (currentMessageIndex >= predefinedConversation.length) return;

    const showNextMessage = () => {
      const currentMessage = predefinedConversation[currentMessageIndex];
      
      setMessages(prev => {
        if (prev.some(msg => msg.id === currentMessage.id)) return prev;
        return [...prev, currentMessage];
      });
      setCurrentMessageIndex(prev => prev + 1);
    };

    const delay = 
      currentMessageIndex === 0 ? 500 : // First message
      predefinedConversation[currentMessageIndex].type === 'user' ? 800 : // User messages
      predefinedConversation[currentMessageIndex].products ? 2000 : 1500; // Bot messages with/without products

    const timeout = setTimeout(showNextMessage, delay);
    return () => clearTimeout(timeout);
  }, [currentMessageIndex]);

  // Product display animations
  const productAnimationProps = {
    initial: { opacity: 0, scale: 0.95, x: 50 },
    animate: { opacity: 1, scale: 1, x: 0 },
    transition: (index: number) => ({ 
      duration: 0.6,
      delay: 1 + index * 0.3, // Increased delay between products
      ease: "easeOut"
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-t-3xl shadow-xl border border-gray-100 h-[800px] flex flex-col w-full"
    >
      {/* Enhanced Bot Interface Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 rounded-xl bg-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-semibold text-gray-900 mb-1 truncate"
            >
              AI Shopping Assistant
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse"/>
                <span className="text-[#8B5CF6] font-medium text-sm">Active Now</span>
              </span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-500 text-sm">~1s</span>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg"
          >
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-[10px] text-white font-medium ring-2 ring-white">99</div>
              <div className="w-5 h-5 rounded-full bg-[#8B5CF6] flex items-center justify-center text-[10px] text-white font-medium ring-2 ring-white">AI</div>
            </div>
            <span className="text-gray-600 font-medium text-sm">Highly Rated</span>
          </motion.div>
        </div>
      </div>

      {/* Chat Messages - Added ref for scrolling */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ 
                duration: 0.4,
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} w-full items-end gap-2`}
            >
              {message.type === 'bot' && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-md shadow-[#8B5CF6]/20 flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </motion.div>
              )}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`w-full rounded-xl p-4 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white shadow-lg shadow-[#8B5CF6]/20 ml-auto max-w-[400px]'
                    : 'bg-white border border-gray-100 shadow-md mr-auto max-w-[400px]'
                }`}
              >
                <div className="prose prose-sm max-w-none">
                  {message.text.split('\n').map((line, i) => (
                    <p key={`${message.id}-line-${i}`} className={`mb-2 last:mb-0 ${message.type === 'bot' ? 'text-gray-800' : 'text-white'}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Horizontally Scrollable Products */}
                {message.products && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }} // Increased delay before showing products
                    className="mt-6"
                  >
                    <div className="flex overflow-x-auto pb-4 gap-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#8B5CF6]/20 scrollbar-track-transparent -mx-4 px-4">
                      {message.products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          {...productAnimationProps}
                          transition={productAnimationProps.transition(index)}
                          className="flex-none w-[220px] snap-start bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-[#8B5CF6]/20 transition-all duration-300 cursor-grab active:cursor-grabbing"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                        >
                          <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 group">
                            <motion.div
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 0 }}
                              transition={{ duration: 0.3, delay: 1 }}
                              className="absolute inset-0 flex items-center justify-center bg-gray-50"
                            >
                              <motion.div
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 180, 360]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                                className="w-8 h-8 border-2 border-[#8B5CF6] border-t-transparent rounded-full"
                              />
                            </motion.div>
                            <motion.img
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              src={product.image}
                              alt={product.name}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.querySelector('.bg-gray-50')?.classList.remove('opacity-0');
                              }}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-4">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-[#8B5CF6] font-medium">{product.price}</span>
                              <span className="text-sm text-gray-400">•</span>
                              <span className="text-sm text-gray-500">{product.category}</span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">{product.description}</p>
                            <motion.div className="flex gap-2">
                              <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 py-2 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300 flex items-center justify-center gap-2"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Buy Now
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-gray-700 hover:bg-gray-900 transition-colors"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              </motion.button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
              {message.type === 'user' && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-md shadow-[#8B5CF6]/20 flex-shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Enhanced Loading Indicator for Bot */}
          {currentMessageIndex < predefinedConversation.length && 
           predefinedConversation[currentMessageIndex].type === 'bot' && 
           !messages.some(msg => msg.id === predefinedConversation[currentMessageIndex].id) && (
            <motion.div
              key="loading-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-start gap-3"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-md shadow-[#8B5CF6]/20 flex-shrink-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </motion.div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-md">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#8B5CF6]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#8B5CF6]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#8B5CF6]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} /> {/* Add ref for scrolling */}
        </AnimatePresence>
      </div>

      {/* Input Field Section - Removed border radius at bottom */}
      <div className="px-8 pt-6 pb-8 border-t border-gray-100 space-y-4 bg-white">
        {/* Animated Input Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            disabled
            value={displayedQuery}
            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-600 text-base focus:ring-2 focus:ring-[#8B5CF6]/20 focus:border-[#8B5CF6] shadow-sm cursor-not-allowed"
            placeholder="Type your message..."
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 text-gray-400"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Footer moved below input */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 text-sm text-gray-500"
        >
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            AI Powered
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            Available 24/7
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
} 