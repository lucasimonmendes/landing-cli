"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FeaturedCases from "@/components/FeaturedCases";
import CuratedContent from "@/components/CuratedContent";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Hero />
      <Services />
      <Testimonials />
      <FeaturedCases />
      <CuratedContent />
      <CallToAction />
      <Footer />
    </div>
  );
}
