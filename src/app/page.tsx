import { AnimatedHero } from "@/components/AnimatedHero";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedMarquee } from "@/components/AnimatedMarquee";
/* import { SearchFeatures } from "@/components/SearchFeatures"; */
import { KoraFeatures } from "@/components/KoraFeatures";
/* import { JobFeatures } from "@/components/JobFeatures";
import { WebFeatures } from "@/components/WebFeatures"; */
/* import { Testimonials } from "@/components/Testimonials"; */
import { Footer } from "@/components/Footer";
import { Feature2 } from "@/components/Feature2";
import { UseCase } from "@/components/UseCase";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <DottedBackground /> */}
      
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
      {/* <section id="what-we-do">
        <TechFeatures />
      </section> */}

      {/* Feature 2 Section */}
      <section id="feature-2">
        <Feature2 />
      </section>

      {/* Search Features Section */}
      <section id="features">
        <KoraFeatures />
      </section>

      {/* Use Case Section */}
      <section id="use-case">
        <UseCase />
      </section>

      {/* Integration Section */}
      {/* <section id="integrations">
        <IntegrationSection />
      </section> */}
      {/* Testimonials Section */}
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}

      {/* pricing section */}
      {/* <section id="pricing">
        <PricingSection />
      </section> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

