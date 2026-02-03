import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">
            Stop the quarterly fire drills
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Join forward-thinking institutions moving from point-in-time audits 
            to continuous, data-driven AML assurance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="https://cal.com/tanzil-meeting/" target="_blank" rel="noopener noreferrer">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="mailto:tanzil@hey-kora.com">
                Contact Sales
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;