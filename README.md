 <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative w-full max-w-xl aspect-square"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[100%] aspect-square">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-[1px] border-gray-800/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-black rounded-full blur-[2px]" />
              </div>
              
              {/* Middle ring */}
              <div className="absolute inset-[15%] rounded-full border-[1px] border-gray-800/30 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-black rounded-full blur-[2px]" />
              </div>
              
              {/* Inner ring */}
              <div className="absolute inset-[30%] rounded-full border-[1px] border-gray-800/40 animate-[spin_10s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-black rounded-full blur-[2px]" />
              </div>
              
              {/* Core sphere */}
              <div className="absolute inset-[45%] rounded-full bg-gradient-to-br from-black to-gray-800 animate-glow">
                <div className="absolute inset-0 bg-gray-800 rounded-full blur-[48px] opacity-80" />
              </div>

              {/* Energy waves */}
              <div className="absolute inset-[45%] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-40 rotate-45 scale-[2]" />
              </div>

              {/* Additional glow effects */}
              <div className="absolute inset-[45%] rounded-full opacity-60">
                <div className="absolute inset-0 bg-black rounded-full blur-[100px]" />
              </div>

              {/* Particle effects */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-black rounded-full animate-pulse delay-300" />
                <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-black rounded-full animate-pulse delay-700" />
              </div>

              {/* Star field */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-black rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: 0.6
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>


features: [
      "Context-aware search",
      "Basic personalized recommendations",
      "Basic analytics dashboard",
      "Up to 1,000 searches/month",
      "Up to 5,000 SKUs",
      "Email support",
      "2 team members",
       "Advanced context-aware search",
      "Smart shopping agents",
      "Real-time analytics",
      "Up to 10,000 searches/month",
      "Up to 25,000 SKUs",
      "Priority support",
      "5 team members",
      "A/B testing",
      "Custom synonyms",
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

    

    ```
    // Example usage
import Logo from '@/components/Logo';

// Basic usage
<Logo />

// With custom size
<Logo width={48} height={48} />

// With custom className for styling
<Logo className="my-custom-class" />
```