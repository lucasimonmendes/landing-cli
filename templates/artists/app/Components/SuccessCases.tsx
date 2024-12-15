import React from "react";

import { motion } from "framer-motion";
function SuccessCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((story) => (
            <motion.div
              key={story}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: story % 2 === 0 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={`/placeholder.svg?height=60&width=60&text=${story}`}
                  alt={`Success Story ${story}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">Artist Name</h3>
                  <p className="text-gray-600">Achievement</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessCases;
