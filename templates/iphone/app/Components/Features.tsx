import React from "react";
import Section from "./Section";

import { motion } from "framer-motion";

function Features() {
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

  return (
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
  );
}

export default Features;
