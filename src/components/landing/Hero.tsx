import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingLogos from "./FloatingLogos";

const Hero = () => {
  return (
    <section className="min-h-screen pt-[100px] flex items-center justify-center relative overflow-hidden">
      {/* Floating integration logos */}
      <FloatingLogos />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6"
          >
            Continuous AML assurance, not quarterly fire drills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Connect your AML stack. Kora AI runs checks, collects evidence, and keeps your program audit-ready—automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-primary rounded-full px-8 py-6 text-base font-medium">
              <a href="https://cal.com/tanzil-meeting/" target="_blank" rel="noopener noreferrer">
                Talk to our team
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-secondary rounded-full px-8 py-6 text-base font-medium">
              <a href="#how-it-works" className="scroll-smooth">
                See how it works
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;