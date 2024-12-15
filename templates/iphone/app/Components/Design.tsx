import React from "react";
import Section from "./Section";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Design() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
  );
}

export default Design;
