import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon,
  CubeIcon,
  MegaphoneIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  BanknotesIcon,
  UsersIcon,
  ChartPieIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

interface DashboardSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const dashboardSections: DashboardSection[] = [
  {
    id: 'home',
    title: 'Data-Driven Insights',
    description: 'Real-time analytics and performance metrics.',
    icon: <ChartBarIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'inventory',
    title: 'Inventory Insights',
    description: 'Smart inventory management and predictions.',
    icon: <CubeIcon className="w-6 h-6 text-white" />
  },
  {
    id: 'marketing',
    title: 'Marketing Analytics',
    description: 'Campaign performance and customer insights.',
    icon: <MegaphoneIcon className="w-6 h-6 text-white" />
  }
];

export function InsightsDashboard() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const getSectionContent = (section: string) => {
    switch (section) {
      case 'home':
        return {
          summaryCards: [
            {
              title: 'User Engagement',
              value: '89%',
              change: '+12%',
              icon: <UserGroupIcon className="w-6 h-6" />,
              color: 'green',
              description: 'Active users today'
            },
            {
              title: 'Conversion Rate',
              value: '4.2%',
              change: '+0.8%',
              icon: <ShoppingCartIcon className="w-6 h-6" />,
              color: 'blue',
              description: 'Purchase conversion'
            },
            {
              title: 'AI Response',
              value: '0.8s',
              change: '-0.2s',
              icon: <RocketLaunchIcon className="w-6 h-6" />,
              color: 'purple',
              description: 'Average response time'
            }
          ],
          metrics: [
            {
              title: 'Search Performance',
              icon: <ChartBarIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Search Accuracy', value: 98 },
                { label: 'Query Understanding', value: 95 },
                { label: 'Result Relevance', value: 92 }
              ]
            },
            {
              title: 'User Satisfaction',
              icon: <UserGroupIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Helpful Responses', value: 94 },
                { label: 'Issue Resolution', value: 89 },
                { label: 'User Retention', value: 87 }
              ]
            },
            {
              title: 'System Health',
              icon: <ChartPieIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'System Uptime', value: 99.9 },
                { label: 'Error Rate', value: 0.1 },
                { label: 'API Performance', value: 96 }
              ]
            }
          ]
        };

      case 'inventory':
        return {
          summaryCards: [
            {
              title: 'Stock Accuracy',
              value: '96%',
              change: '+4%',
              icon: <CubeIcon className="w-6 h-6" />,
              color: 'green',
              description: 'Inventory accuracy'
            },
            {
              title: 'Active SKUs',
              value: '2.8k',
              change: '+245',
              icon: <TagIcon className="w-6 h-6" />,
              color: 'blue',
              description: 'Products tracked'
            },
            {
              title: 'Turnover Rate',
              value: '4.5x',
              change: '+0.8x',
              icon: <TruckIcon className="w-6 h-6" />,
              color: 'purple',
              description: 'Monthly turnover'
            }
          ],
          metrics: [
            {
              title: 'Stock Management',
              icon: <CubeIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'In Stock Rate', value: 94 },
                { label: 'Reorder Accuracy', value: 91 },
                { label: 'Dead Stock', value: 3 }
              ]
            },
            {
              title: 'Demand Prediction',
              icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Forecast Accuracy', value: 88 },
                { label: 'Stockout Prevention', value: 95 },
                { label: 'Trend Detection', value: 92 }
              ]
            },
            {
              title: 'Supply Chain',
              icon: <TruckIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Supplier Reliability', value: 93 },
                { label: 'Lead Time Accuracy', value: 89 },
                { label: 'Cost Efficiency', value: 87 }
              ]
            }
          ]
        };

      case 'marketing':
        return {
          summaryCards: [
            {
              title: 'Campaign ROI',
              value: '285%',
              change: '+45%',
              icon: <BanknotesIcon className="w-6 h-6" />,
              color: 'green',
              description: 'Return on investment'
            },
            {
              title: 'Reach',
              value: '58k',
              change: '+12k',
              icon: <UsersIcon className="w-6 h-6" />,
              color: 'blue',
              description: 'Unique customers'
            },
            {
              title: 'Personalization',
              value: '92%',
              change: '+8%',
              icon: <ChartPieIcon className="w-6 h-6" />,
              color: 'purple',
              description: 'Targeting accuracy'
            }
          ],
          metrics: [
            {
              title: 'Campaign Performance',
              icon: <ChartBarIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Click-through Rate', value: 24 },
                { label: 'Conversion Rate', value: 18 },
                { label: 'Customer Acquisition', value: 85 }
              ]
            },
            {
              title: 'Customer Segmentation',
              icon: <UserGroupIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Segment Accuracy', value: 94 },
                { label: 'Profile Completion', value: 88 },
                { label: 'Behavior Tracking', value: 91 }
              ]
            },
            {
              title: 'Content Optimization',
              icon: <RocketLaunchIcon className="w-5 h-5" />,
              submetrics: [
                { label: 'Message Relevance', value: 93 },
                { label: 'A/B Test Success', value: 86 },
                { label: 'Engagement Score', value: 89 }
              ]
            }
          ]
        };

      default:
        return null;
    }
  };

  const content = getSectionContent(activeSection);

  return (
    <div className="h-full bg-gray-50/50 flex flex-col">
      {/* Enhanced Top Navigation Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-10 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dashboardSections.find(section => section.id === activeSection)?.icon}
            </motion.div>
            <div>
              <motion.h2 
                className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {dashboardSections.find(section => section.id === activeSection)?.title}
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {dashboardSections.find(section => section.id === activeSection)?.description}
              </motion.p>
            </div>
          </div>

          <div className="flex gap-2">
            {dashboardSections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all relative ${
                  activeSection === section.id
                    ? 'text-[#8B5CF6] bg-[#8B5CF6]/5'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 border-2 border-[#8B5CF6]/20 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={activeSection === section.id ? 'text-[#8B5CF6]' : 'text-gray-400'}>
                  {section.icon}
                </span>
                <span>{section.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Enhanced Summary Cards */}
              {content?.summaryCards.map((card, index) => (
                <motion.div
                  key={`summary-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          card.color === 'green' ? 'bg-green-100 text-green-600' :
                          card.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          'bg-purple-100 text-purple-600'
                        }`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {card.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                        <p className="text-sm text-gray-500">{card.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.span 
                        className="text-3xl font-semibold text-gray-900"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {card.value}
                      </motion.span>
                      <motion.span 
                        className={`text-sm font-medium px-3 py-1.5 rounded-full ${
                          card.color === 'green' ? 'bg-green-100 text-green-600' :
                          card.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          'bg-purple-100 text-purple-600'
                        }`}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {card.change}
                      </motion.span>
                    </div>

                    <div className="h-24 relative">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 to-transparent rounded-lg overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: 40, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="absolute inset-0 flex items-end px-2"
                        >
                          {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 mx-0.5"
                              initial={{ height: 0 }}
                              animate={{ height: `${Math.random() * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                            >
                              <div className={`w-full h-full rounded-t ${
                                card.color === 'green' ? 'bg-green-400' :
                                card.color === 'blue' ? 'bg-blue-400' :
                                'bg-purple-400'
                              } opacity-50`} />
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Enhanced Metrics */}
              {content?.metrics.map((metric, index) => (
                <motion.div
                  key={`metric-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -2 }}
                  onHoverStart={() => setHoveredMetric(metric.title)}
                  onHoverEnd={() => setHoveredMetric(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <motion.span 
                        className="text-[#8B5CF6]"
                        animate={{ 
                          scale: hoveredMetric === metric.title ? 1.1 : 1,
                          rotate: hoveredMetric === metric.title ? 360 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {metric.icon}
                      </motion.span>
                      <h3 className="text-lg font-medium text-gray-900">{metric.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Real-time</span>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 text-[#8B5CF6]"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {metric.submetrics.map((submetric, i) => (
                      <motion.div 
                        key={i} 
                        className="space-y-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{submetric.label}</span>
                          <span className="text-[#8B5CF6] font-medium">{submetric.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]"
                            initial={{ width: 0 }}
                            animate={{ width: `${submetric.value}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 