import React from "react";

import { motion } from "framer-motion";
function Section({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
