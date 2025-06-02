'use client';

import { AnimatedHeroCAP } from "@/components/AnimatedHeroCAP";

import { AnimatedMarquee } from "@/components/AnimatedMarquee";
import { DottedBackground } from "@/components/DottedBackground";

import { Footer } from "@/components/Footer";

export default function CustomerActivationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DottedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-8">
          <AnimatedHeroCAP />
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

     
      {/* Footer Section */}
      <Footer />
    </div>
  );
}