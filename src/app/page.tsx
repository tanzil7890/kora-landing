import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedMarquee } from "@/components/AnimatedMarquee";
import { DottedBackground } from "@/components/DottedBackground";
import { TechFeatures } from "@/components/TechFeatures";
import { SearchFeatures } from "@/components/SearchFeatures";
/* import { JobFeatures } from "@/components/JobFeatures";
import { WebFeatures } from "@/components/WebFeatures"; */
import { IntegrationSection } from "@/components/IntegrationSection";
/* import { Testimonials } from "@/components/Testimonials"; */
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DottedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-8">
          <AnimatedHero />
        </div>
      </section>

      {/* Display Section */}
      {/* <section className="relative pb-32">
        <div className="container mx-auto px-8"> */}
         {/*  <RotatingAnimation />    */}
          {/* <AnimatedDisplay /> */}
        {/* </div>
      </section> */}

      {/* Animated Marquee Banner */}
      <AnimatedMarquee />

      {/* Features Section */}
      <section id="why-us">
        <AnimatedFeatures />
      </section>

      {/* Tech Features Section */}
      <section id="what-we-do">
        <TechFeatures />
      </section>

      {/* Search Features Section */}
      <section id="features">
        <SearchFeatures />
      </section>

      {/* Integration Section */}
      <section id="integrations">
        <IntegrationSection />
      </section>
      {/* Testimonials Section */}
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}

      {/* pricing section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

