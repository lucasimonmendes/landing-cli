import React from "react";

import { motion } from "framer-motion";
function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of industry experience, we nurture talent and drive
            careers to new heights in the ever-evolving music landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Artist Development", "Career Strategy", "Brand Partnerships"].map(
            (expertise, index) => (
              <motion.div
                key={expertise}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{expertise}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
