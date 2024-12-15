"use client";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Design from "./Components/Design";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <Design />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
