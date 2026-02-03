import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Calendar, CheckCircle, RefreshCw, FileCheck, AlertCircle, ClipboardList, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Remediation = () => {
  const workflowSteps = [
    {
      icon: AlertCircle,
      title: "Exception Detected",
      description: "Control check fails or issue identified",
    },
    {
      icon: ClipboardList,
      title: "Remediation Plan Created",
      description: "Auto-generated plan with owners, due dates, required evidence",
    },
    {
      icon: Users,
      title: "Tracked to Closure",
      description: "Integrated with ServiceNow/Jira/GRC for accountability",
    },
    {
      icon: RefreshCw,
      title: "Continuous Re-testing",
      description: "Prove the fix held—not just closed, but verified effective",
    },
    {
      icon: FileCheck,
      title: "Proof-of-Fix Package",
      description: "Regulator-ready evidence that remediation is complete",
    },
  ];

  const features = [
    {
      icon: ClipboardList,
      title: "Exception to Remediation Plan",
      description: "Automatically convert control failures into structured remediation plans with clear owners, deadlines, and required evidence",
    },
    {
      icon: Users,
      title: "Workflow Integration",
      description: "Push remediation tasks into ServiceNow, Jira, or your GRC platform—no separate tool to manage",
    },
    {
      icon: Calendar,
      title: "Closure Tracking",
      description: "Real-time visibility into remediation status, overdue items, and completion rates",
    },
    {
      icon: RefreshCw,
      title: "Continuous Re-testing",
      description: "Don't just close tickets—continuously re-run checks to prove the fix held for 30, 60, 90 days",
    },
    {
      icon: FileCheck,
      title: "Proof-of-Fix Packages",
      description: "Generate regulator-ready packages showing what was fixed, when, by whom, and proof it's still effective",
    },
    {
      icon: TrendingUp,
      title: "MRA/Consent Order Ready",
      description: "Purpose-built for responding to MRAs, MRIAs, and consent orders with full audit trails",
    },
  ];

  const benefits = [
    {
      stat: "Make everyone care",
      label: "Clear ownership, deadlines, and accountability",
    },
    {
      stat: "Proof it sticks",
      label: "Continuous re-testing, not just ticket closure",
    },
    {
      stat: "Exam-ready",
      label: "Proof-of-fix packages regulators expect",
    },
  ];

  const problemPoints = [
    {
      title: "Fire Drills",
      description: "Every exam or look-back triggers ad-hoc 'all hands' scrambles for weeks",
    },
    {
      title: "No Accountability",
      description: "Issues get documented but not tracked to actual closure",
    },
    {
      title: "No Proof",
      description: "Tickets closed but no verification the fix actually held",
    },
    {
      title: "Regulator Expectations",
      description: "Banks must demonstrate ongoing effectiveness, not just pass yearly audits",
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
              Drive remediation to closure, with proof
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              The "make everyone care" module. Convert exceptions into remediation plans with owners, due dates, and required evidence. Track closure, continuously re-test, and produce proof-of-fix packages regulators expect.
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

      {/* Problem Section */}
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
              Fire drills without follow-through
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problemPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border/50"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              From exception to proof-of-fix
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border/50">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="ml-6 h-6 w-0.5 bg-border" />
                )}
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
              MRA and consent order ready
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
              From tickets to proof
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground">
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
              Stop fire drills, start proving
            </h2>
            <p className="text-lg mb-10 opacity-90">
              See how Remediation Autopilot drives issues to closure with continuous re-testing and proof-of-fix packages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-medium border-0">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-medium">
                Talk to Sales
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

export default Remediation;
