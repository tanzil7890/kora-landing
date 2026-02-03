const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">K</span>
              </div>
              <span className="font-semibold text-foreground text-lg">Kora AI</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Continuous AML assurance and remediation for banks and fintechs with serious BSA/AML obligations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="/evidence-graph" className="hover:text-foreground transition-colors">Evidence Graph</a>
              <a href="/control-checks" className="hover:text-foreground transition-colors">Control Checks</a>
            </nav>
          </div>

          

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
               <a href="/reconciliation" className="hover:text-foreground transition-colors">Reconciliation</a>
              <a href="/remediation" className="hover:text-foreground transition-colors">Remediation</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Blog(soon)</a>
              <a href="mailto:tanzil@hey-kora.com" className="hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Kora AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            {/* <a href="#" className="hover:text-foreground transition-colors">Twitter</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;