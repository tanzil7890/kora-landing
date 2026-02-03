import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Stealth Mode Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-primary/10 border-b border-primary/20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-2 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Stealth Mode
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            • Building the future of AML compliance
          </span>
        </div>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-[36px] left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">K</span>
            </div>
            <span className="font-semibold text-foreground text-lg">Kora AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/evidence-graph" className="hover:text-foreground transition-colors">Evidence Graph</a>
            <a href="/control-checks" className="hover:text-foreground transition-colors">Control Checks</a>
            <a href="/reconciliation" className="hover:text-foreground transition-colors">Reconciliation</a>
            <a href="/remediation" className="hover:text-foreground transition-colors">Remediation</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button> */}
            <Button asChild size="sm" className="btn-primary rounded-full px-5">
              <a href="https://cal.com/tanzil-meeting/" target="_blank" rel="noopener noreferrer">
                Talk to Sales
              </a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
    </>
  );
};

export default Navbar;