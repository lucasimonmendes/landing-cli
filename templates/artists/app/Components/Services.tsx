import React from "react";

import { motion } from "framer-motion";
function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Career Planning",
            "Tour Management",
            "Brand Partnerships",
            "Digital Strategy",
            "Legal & Business Affairs",
            "Public Relations",
          ].map((service, index) => (
            <motion.div
              key={service}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
