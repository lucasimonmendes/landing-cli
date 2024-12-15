"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Featured from "./Components/Featured";
import SuccessCases from "./Components/SuccessCases";
import Services from "./Components/Services";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";

export default function ArtistManagementLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Us / Our Expertise */}
      <About />
      {/* Featured Artists */}
      <Featured />
      {/* Success Stories */}
      <SuccessCases />
      {/* Services */}
      <Services />
      {/* Call-to-Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </div>
  );
}
