import { motion } from "framer-motion";
import { ArrowRight, GitCompare, Database, CheckCircle, AlertTriangle, Users, FileText, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Reconciliation = () => {
  const systems = [
    { name: "Core Banking", icon: Database },
    { name: "AML/TM", icon: AlertTriangle },
    { name: "Case Management", icon: FileText },
    { name: "KYC", icon: Users },
    { name: "Data Warehouse", icon: Database },
  ];

  const reconciliationChecks = [
    {
      icon: TrendingUp,
      title: "Transaction Population Parity",
      description: "Reconcile transaction counts, amounts, and latency between core banking, AML/TM, and data warehouse to ensure complete coverage",
    },
    {
      icon: FileText,
      title: "Alert-to-Case Closure Integrity",
      description: "Validate that all alerts have case assignments and outcomes—no alerts falling through the cracks",
    },
    {
      icon: CheckCircle,
      title: "SAR-Required Case Coverage",
      description: "Check that cases requiring regulatory reports (SARs, CTRs) have them attached and filed",
    },
    {
      icon: Users,
      title: "High-Risk Customer Consistency",
      description: "Ensure high-risk customers exist and are scored consistently across KYC, AML, and CRM systems",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      stat: "$200B+",
      label: "Global compliance costs annually, heavy share on manual reconciliation",
    },
    {
      icon: CheckCircle,
      stat: "Complete",
      label: "Prove all transactions, alerts, and customers are consistently represented",
    },
    {
      icon: GitCompare,
      stat: "Automated",
      label: "End-to-end reconciliation across your entire AML stack",
    },
  ];

  const problemPoints = [
    "No single system proves completeness across all AML data sources",
    "Manual reconciliation consumes 5-10% of noninterest expense for mid-sized banks",
    "Gaps between systems go unnoticed until exams or enforcement actions",
    "Data quality issues silently degrade control effectiveness",
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
              Complete and consistent AML data, automatically
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Automated reconciliation across core banking, AML, case management, KYC, and data warehouse. Prove every transaction, alert, and customer is consistently represented across all systems.
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
              No single source of truth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Global financial crime compliance costs reach $200B+ annually, with a heavy share spent on manual processes and reconciliation. Mid-sized banks especially see compliance expenses consuming 5–10% of noninterest expense.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {problemPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl p-4 border border-border/50 flex items-start gap-3"
              >
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Integration Section */}
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
              Continuous reconciliation across your stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kora AI connects to all critical systems and continuously validates completeness and consistency
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {systems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border/50"
              >
                <system.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{system.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
              <GitCompare className="w-5 h-5" />
              Automated bi-directional reconciliation
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reconciliation Checks Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Reconciliation Checks</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Four critical reconciliations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {reconciliationChecks.map((check, index) => (
              <motion.div
                key={check.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:border-border transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <check.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {check.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {check.description}
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
              From manual to automated
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
              Stop manual reconciliation
            </h2>
            <p className="text-lg mb-10 opacity-90">
              See how automated reconciliation ensures complete and consistent AML data across your entire stack
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

export default Reconciliation;
