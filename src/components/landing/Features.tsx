import { motion } from "framer-motion";
import { ArrowRight, Database, Code2, GitCompare, FileCheck, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Continuous Evidence Graph",
    description: "A live graph linking obligations → controls → systems → checks → evidence. Query any control's 12-month effectiveness in seconds.",
  },
  {
    icon: Code2,
    title: "Code-as-Control Checks",
    description: "Controls as executable SQL/Python in a secure sandbox. The agent runs checks continuously, not just dashboards.",
  },
  {
    icon: GitCompare,
    title: "Cross-System Reconciliation",
    description: "Automated reconciliation across core, TM, case management, KYC, and warehouse. Full population coverage.",
  },
  {
    icon: FileCheck,
    title: "Remediation Autopilot",
    description: "Convert exceptions into tracked plans with owners, deadlines, and proof-of-fix verification.",
  },
  {
    icon: BarChart3,
    title: "Scenario Governance",
    description: "Continuous TM scenario health monitoring—coverage drift, threshold changes, QA results.",
  },
  {
    icon: Shield,
    title: "Exam-Ready Packs",
    description: "Generate regulator-ready evidence packages at any time with one click. No more fire drills.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Product</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            An autonomous compliance engineer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kora AI connects to your existing stack and continuously runs checks, 
            collects evidence, and drives remediation to closure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;