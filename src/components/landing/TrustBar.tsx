import { motion } from "framer-motion";

const clients = [
  "Vanta", "Brex", "Mercury", "Sequoia", "Betterment", 
  "Morningstar", "SecureFrame", "TIAA", "Branch", "Awardco"
];

const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border bg-cream-dark/50">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground font-mono mb-8"
        >
          Serving startups, Fortune 500s, and everyone <span className="bg-secondary px-2 py-1 rounded">in between</span>
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-8 text-muted-foreground/60 font-semibold text-lg"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;