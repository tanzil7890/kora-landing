import { motion } from "framer-motion";

const stats = [
  { value: "$61B", label: "Annual compliance costs in US & Canada" },
  { value: "99%", label: "of institutions report rising costs" },
  { value: "$3B+", label: "TD Bank's AML penalty (2024)" },
  { value: "50-80%", label: "Reduction in manual evidence work" },
];

const Stats = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">The Reality</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            AML compliance is broken
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;