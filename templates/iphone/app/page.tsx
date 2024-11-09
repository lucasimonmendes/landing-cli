"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Button = ({ children, primary = false, ...props }) => (
  <button
    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
      primary
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }`}
    {...props}
  >
    {children}
  </button>
);

const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`py-24 ${className}`}
  >
    {children}
  </motion.section>
);

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
          <div className="space-x-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#design"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Design
            </a>
            <Button primary>Buy Now</Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <Section className="h-screen flex items-center justify-center text-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Experience Perfection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Discover the new iPhone. Elegance redefined, power unleashed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-x-4"
            >
              <Button primary>Learn More</Button>
              <Button>Watch Video</Button>
            </motion.div>
          </div>
        </Section>

        <Section id="features" className="bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Revolutionary Features
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "A16 Bionic Chip",
                  description: "Unparalleled performance and efficiency.",
                },
                {
                  title: "Pro Camera System",
                  description: "Capture moments with breathtaking detail.",
                },
                {
                  title: "All-Day Battery Life",
                  description: "Power that lasts as long as you do.",
                },
              ].map((feature, index) => (
                <FadeInWhenVisible key={index}>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </Section>

        <Section id="design" className="overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 mb-12 md:mb-0">
              <h2 className="text-4xl font-bold">Designed for Perfection</h2>
              <p className="text-xl text-gray-600">
                Every curve, every detail crafted with precision. Experience the
                epitome of design excellence.
              </p>
              <Button primary>Explore Design</Button>
            </div>
            <div className="md:w-1/2 relative">
              <motion.div
                style={{
                  y: scrollY * 0.2,
                }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="iPhone Design"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </Section>

        <Section className="bg-gray-900 text-white text-center">
          <div className="container mx-auto px-6 space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join millions of satisfied users and elevate your mobile
              experience today.
            </p>
            <Button primary>Buy Now</Button>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2024 iPhone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
