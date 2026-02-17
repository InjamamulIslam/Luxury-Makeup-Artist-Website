import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { AcademySection } from "./components/AcademySection";
import { TestimonialsSection } from "./components/TestimonialsSection";

import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { ParticleBackground } from "./components/ParticleBackground";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F6] overflow-x-hidden relative scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <main className="relative z-10">
        <div id="home" className="overflow-hidden">
          <HeroSection />
        </div>
        <div id="about" className="overflow-hidden scroll-mt-20">
          <AboutSection />
        </div>
        <div id="services" className="overflow-hidden scroll-mt-20">
          <ServicesSection />
        </div>
        <div id="portfolio" className="overflow-hidden scroll-mt-20">
          <PortfolioSection />
        </div>
        <div id="academy" className="overflow-hidden scroll-mt-20">
          <AcademySection />
        </div>
        <div id="testimonials" className="overflow-hidden scroll-mt-20">
          <TestimonialsSection />
        </div>
        <div id="booking" className="overflow-hidden scroll-mt-20">
          <BookingSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}