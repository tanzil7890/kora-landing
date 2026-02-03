import { motion } from "framer-motion";
import { Plug, Cpu, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Connect your stack",
    description: "Integrate with core banking, AML platforms, case tools, KYC vendors, and data warehouse in days.",
  },
  {
    icon: Cpu,
    title: "Agent runs checks",
    description: "Kora AI continuously executes controls as code, collects evidence, and builds your AML evidence graph.",
  },
  {
    icon: FileCheck,
    title: "Stay audit-ready",
    description: "Surface issues ranked by risk. Generate exam packs anytime. No more scrambling before audits.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            From integration to audit-ready in weeks
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;