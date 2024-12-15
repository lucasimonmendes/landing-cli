import React from "react";
import Section from "./Section";
import Button from "./Button";

import { motion } from "framer-motion";
function Hero() {
  return (
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
  );
}

export default Hero;
