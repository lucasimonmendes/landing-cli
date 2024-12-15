import React from "react";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
function CallToAction() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Your Career to the Next Level?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join the ranks of our successful artists and let us help you achieve
          your musical dreams.
        </p>
        <motion.button
          className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Consultation
          <ChevronRight className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}

export default CallToAction;
