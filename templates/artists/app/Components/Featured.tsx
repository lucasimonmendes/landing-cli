import React from "react";

import { motion } from "framer-motion";
function Featured() {
  return (
    <section id="artists" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Artists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((artist) => (
            <motion.div
              key={artist}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`/placeholder.svg?height=400&width=300&text=Artist ${artist}`}
                alt={`Artist ${artist}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">Artist Name</h3>
                  <p className="text-sm">Genre • Latest Release</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
