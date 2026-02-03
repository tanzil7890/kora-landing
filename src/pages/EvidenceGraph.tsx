import { motion } from "framer-motion";
import { ArrowRight, Database, Search, AlertCircle, GitBranch, FileCheck, FileSpreadsheet, Mail, Ticket, FolderOpen, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const EvidenceGraph = () => {
  const scatteredSources = [
    { icon: FileSpreadsheet, label: "Spreadsheets" },
    { icon: Mail, label: "Emails" },
    { icon: Ticket, label: "Tickets" },
    { icon: FolderOpen, label: "Shared Drives" },
  ];

  const capabilities = [
    {
      icon: Search,
      title: "Instant Queries",
      description: "Show the last 12 months of operating effectiveness evidence for TM Scenario 12",
    },
    {
      icon: AlertCircle,
      title: "Exception Tracking",
      description: "Show every exception, its owner, and proof the fix held for 90 days",
    },
    {
      icon: GitBranch,
      title: "Real-time Links",
      description: "See which checks validate which controls, with full data lineage",
    },
    {
      icon: FileCheck,
      title: "Audit-Ready",
      description: "Generate exam packs at any time with complete evidence trails",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      stat: "50-80%",
      label: "Time savings on manual evidence assembly and reconciliation work",
    },
    {
      icon: Database,
      stat: "Real-time",
      label: "Living system of record, not point-in-time snapshots",
    },
    {
      icon: Shield,
      stat: "Always ready",
      label: "Exam-ready at any time—no more quarterly fire drills",
    },
  ];

  const flowSteps = [
    "Obligations",
    "Policies",
    "Controls",
    "Systems",
    "Checks",
    "Evidence",
    "Exceptions",
    "Remediation",
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
              Your AML program's system of record
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
            >
              A living graph that links obligations → controls → systems → checks → evidence → exceptions → remediation proof. Answer instantly when regulators ask.
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
              Evidence scattered everywhere
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When regulators ask "Prove control X was operating effectively over the last 12 months," teams scramble for weeks through spreadsheets, tickets, emails, and shared drives. With financial crime compliance costs at $61B per year in the US and Canada alone, this manual evidence work is a major cost driver.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {scatteredSources.map((source, index) => (
              <motion.div
                key={source.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                  <source.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{source.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
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
              Everything connected, everything queryable
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-center"
              >
                <div className="bg-primary/10 text-primary px-6 py-3 rounded-full font-medium text-sm">
                  {step}
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground mx-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Answer instantly, with proof
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-border transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{capability.description}"
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
              From weeks to instant
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
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
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
              Stop scrambling for evidence
            </h2>
            <p className="text-lg mb-10 opacity-90">
              See how Evidence Graph makes your AML program audit-ready at all times
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

export default EvidenceGraph;
