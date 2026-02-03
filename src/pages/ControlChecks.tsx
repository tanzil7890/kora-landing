import { motion } from "framer-motion";
import { ArrowRight, Code2, FileCode, Lock, Database, AlertOctagon, Lightbulb, RefreshCw, Calendar, PlayCircle, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ControlChecks = () => {
  const comparison = {
    traditional: [
      "Quarterly or annual testing",
      "Small samples (10-50 transactions)",
      "Manual validation",
      "Weeks to find issues",
    ],
    kora: [
      "Continuous monitoring 24/7",
      "Full population coverage",
      "Automated checks",
      "Real-time detection",
    ],
  };

  const processSteps = [
    {
      icon: FileCode,
      title: "Define Control",
      description: "Machine-readable templates (timeliness, completeness, screening coverage, alert/case integrity)",
    },
    {
      icon: Cpu,
      title: "Agent Generates Code",
      description: "SQL/Python checks generated and executed in locked-down sandbox",
    },
    {
      icon: PlayCircle,
      title: "Continuous Execution",
      description: "Checks run across full population, results written to evidence graph",
    },
    {
      icon: AlertOctagon,
      title: "When Checks Fail",
      description: "Opens exception → Attaches samples + lineage → Recommends remediation → Tracks re-test",
    },
  ];

  const features = [
    {
      icon: FileCode,
      title: "Machine-Readable Templates",
      description: "Express controls as code: timeliness, completeness, screening coverage, alert/case integrity",
    },
    {
      icon: Lock,
      title: "Locked-Down Sandbox",
      description: "Secure, isolated execution environment for safety",
    },
    {
      icon: Database,
      title: "Full Population Coverage",
      description: "Not samples—every transaction, every customer, every alert",
    },
    {
      icon: AlertOctagon,
      title: "Automatic Exception Management",
      description: "Failed checks open exceptions with data samples and lineage",
    },
    {
      icon: Lightbulb,
      title: "Recommended Remediation",
      description: "AI suggests fix steps based on failure patterns and historical data",
    },
    {
      icon: RefreshCw,
      title: "Re-test Tracking",
      description: "Continuous verification that fixes stick—prove it held for 90 days",
    },
  ];

  const benefits = [
    {
      stat: "24/7",
      label: "Continuous automated validation",
    },
    {
      stat: "100%",
      label: "Full population, not 0.1% samples",
    },
    {
      stat: "Minutes",
      label: "Faster detection, not months",
    },
    {
      stat: "Proactive",
      label: "Catch drift before regulators do",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6"
            >
              Executable Assurance for AML controls
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Controls expressed as machine-readable templates. An autonomous agent generates and executes checks in a locked-down sandbox, writing results to your evidence graph. Full population monitoring, 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="btn-primary rounded-full px-8 py-6 text-base font-medium">
                Talk to our team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary rounded-full px-8 py-6 text-base font-medium">
                See how it works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section - Comparison */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Sample-based testing leaves gaps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Traditional Approach</h3>
              </div>
              <ul className="space-y-3">
                {comparison.traditional.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Kora Approach</h3>
              </div>
              <ul className="space-y-3">
                {comparison.kora.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              From policy to executable code
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Features</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Built for AML compliance teams
            </h2>
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Impact</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              From periodic audits to continuous assurance
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                  {benefit.stat}
                </div>
                <p className="text-muted-foreground text-sm">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Move beyond sample-based testing
            </h2>
            <p className="text-lg mb-10 opacity-90">
              See how Code-as-Control gives you continuous, full-population AML assurance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-medium border-0">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-medium">
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ControlChecks;
