import React from "react";

function Button({ children, primary = false, ...props }) {
  return (
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
}

export default Button;
